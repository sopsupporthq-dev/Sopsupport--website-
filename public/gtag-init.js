// Google tag (gtag.js) bootstrap. Kept as its own same-origin file (instead
// of an inline <script> in index.html) so the Content-Security-Policy in
// public/_headers can use a plain script-src allowlist without needing
// 'unsafe-inline' — inline scripts are one of the more common XSS vectors,
// so avoiding the exception is worth this one-file move. Behavior is
// unchanged: this is the standard GA4 snippet, verbatim.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-VFX2BTMFPL");
