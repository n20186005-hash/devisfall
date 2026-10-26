/** Existing opt-in analytics: refusal takes effect before persistence. */
export function initAnalytics(id: string) {
  const w = window as unknown as Window & { __devisGA?: boolean; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: string]: unknown };
  const key = 'analytics-consent', vetoKey = key + '-off';
  const banner = document.getElementById('cookie-banner');
  const status = document.getElementById('consent-status');
  const ne = document.documentElement.lang.startsWith('ne');
  let denied = false;
  const read = () => { try { return localStorage.getItem(key); } catch { return null; } };
  const veto = () => { try { return sessionStorage.getItem(vetoKey) !== null; } catch { return true; } };
  const off = () => { denied = true; w['ga-disable-' + id] = true; w.gtag?.('consent', 'update', { analytics_storage: 'denied' }); };
  const refuse = () => {
    try { localStorage.setItem(key, 'denied'); if (localStorage.getItem(key) === 'denied') return true; } catch {}
    try { localStorage.removeItem(key); return localStorage.getItem(key) === null; } catch { return false; }
  };
  const on = () => {
    denied = false; w['ga-disable-' + id] = false;
    if (w.__devisGA) { w.gtag?.('consent', 'update', { analytics_storage: 'granted' }); return; }
    w.__devisGA = true; w.dataLayer ||= [];
    w.gtag = (...args: unknown[]) => { w.dataLayer!.push(args); };
    w.gtag('consent', 'default', { analytics_storage: 'granted' });
    w.gtag('js', new Date()); w.gtag('config', id, { anonymize_ip: true });
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id; document.head.appendChild(script);
  };
  const set = (allow: boolean) => {
    off();
    let saved = false, sharedOff = false, tabOff = false;
    try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {}
    if (allow) {
      try {
        sessionStorage.removeItem(vetoKey);
        if (sessionStorage.getItem(vetoKey) !== null) throw Error('veto');
        localStorage.setItem(key, 'granted');
        if (localStorage.getItem(key) !== 'granted') throw Error('readback');
        saved = true; on();
      } catch { sharedOff = refuse(); try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {} }
    } else {
      try { localStorage.setItem(key, 'denied'); saved = localStorage.getItem(key) === 'denied'; } catch {}
      sharedOff = saved || refuse();
    }
    if (status) status.textContent = saved ? (ne ? 'रोजाइ सुरक्षित गरियो।' : 'Choice saved.') :
      (ne ? 'भण्डारण पुष्टि गर्न सकिएन। यस पृष्ठमा GA बन्द छ।' : 'Saving could not be verified. GA is off on this page.') +
      (sharedOff ? (ne ? ' भण्डारणको अनुमति हटाइएको छ।' : ' Stored permission was cleared.') : (ne ? ' अर्को ट्याब वा पछिको भ्रमणमा भण्डारणको अनुमति बाँकी रहन सक्छ।' : ' Stored permission may remain usable in other tabs or future visits.')) +
      (tabOff ? (ne ? ' यस ट्याबमा अस्वीकार कायम छ।' : ' Refusal is retained in this tab.') : '');
    if (saved) banner?.classList.add('hidden'); else banner?.classList.remove('hidden');
  };
  w['ga-disable-' + id] = true;
  if (read() === 'granted' && !veto()) on(); else { off(); if (!read()) banner?.classList.remove('hidden'); }
  document.getElementById('cookie-allow')?.addEventListener('click', () => set(true));
  document.getElementById('cookie-deny')?.addEventListener('click', () => set(false));
  document.getElementById('cookie-settings')?.addEventListener('click', () => banner?.classList.remove('hidden'));
  window.addEventListener('storage', (event) => { if ((event.key === key || event.key === null) && read() !== 'granted') { off(); try { sessionStorage.setItem(vetoKey, '1'); } catch {} } else if (!denied && !veto() && read() === 'granted') on(); });
}
