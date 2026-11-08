/**
 * Fire-and-forget click log to /api/log (same pipeline as CTAButton, CopyCode
 * and TrackedExternalLink). Client-only; safe to call from event handlers.
 */
export function logClick(label: string, referralCode = ''): void {
  try {
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label,
        referralCode,
        page: window.location.pathname,
        site: window.location.hostname,
        referrer: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('lref')) || '',
      }),
    }).catch(() => {})
  } catch {
    /* logging must never break the click */
  }
}
