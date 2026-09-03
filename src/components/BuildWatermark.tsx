/**
 * Renders a build-provenance watermark into the real DOM — not just visible
 * in view-source. Unlike a source-code comment (stripped by minification) or
 * an index.html comment (only present in the initial static HTML shell),
 * this lives in the actual document tree the whole time the app is running,
 * so it's present in "Copy outerHTML", saved-page copies, and any clone of
 * the rendered site — not just the first response.
 *
 * aria-hidden + visually clipped off-screen, so it has zero effect on
 * sighted users, screen readers, or layout.
 */
export function BuildWatermark() {
  return (
    <div
      aria-hidden="true"
      data-built-by="Binil Lejy Eapen"
      data-site="getsopsupport.com"
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {"Built by Binil Lejy Eapen for SOP Support (getsopsupport.com) — © 2026. Unauthorized reuse is not permitted."}
    </div>
  );
}
