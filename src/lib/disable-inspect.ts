/**
 * Lightweight deterrents against casual "right click → view source" copying.
 *
 * Honest limitation, please read: a website's HTML/CSS/JS is downloaded to
 * the visitor's browser to run — that's how the web works, and nothing
 * running in the browser can change it. Anyone who opens devtools via the
 * browser's own menu (not a keyboard shortcut), looks at the Network tab, or
 * just runs `curl` on the site can still see everything. Combined with the
 * production minification/mangling in vite.config.ts, this only raises the
 * bar for non-technical visitors — it is not a real security boundary, and
 * nothing sensitive should ever depend on it.
 *
 * Only runs in production builds — devs get full devtools access locally.
 */
export function installInspectDeterrents(): void {
  if (import.meta.env.DEV) return;
  if (typeof window === "undefined") return;

  const isFormField = (target: EventTarget | null) => {
    const tag = (target as HTMLElement | null)?.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  };

  // Block the right-click context menu, except on form fields — people
  // still need to right-click to paste into the contact form.
  window.addEventListener("contextmenu", (event) => {
    if (isFormField(event.target)) return;
    event.preventDefault();
  });

  // Block the common devtools/view-source keyboard shortcuts. Anyone can
  // still reach devtools through the browser's menu — this only stops the
  // one-key habit.
  window.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const blocked =
      key === "F12" ||
      (event.ctrlKey && event.shiftKey && (key === "I" || key === "J" || key === "C")) ||
      (event.metaKey && event.altKey && (key === "I" || key === "J" || key === "C")) || // macOS
      (event.ctrlKey && key === "U") ||
      (event.metaKey && key === "U");

    if (blocked) event.preventDefault();
  });

  console.log(
    "%cStop.",
    "color:#ef4444; font-size:32px; font-weight:bold;",
  );
  console.log(
    "%cThis site's code is not licensed for reuse. If someone told you to paste something here, it's likely a scam.",
    "font-size:14px;",
  );
  console.log(
    "%cBuilt by Binil Lejy Eapen for SOP Support (getsopsupport.com) — © 2026.",
    "color:#10b981; font-size:12px;",
  );
}
