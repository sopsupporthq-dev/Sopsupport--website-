/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * The site is a static SPA, so any key used directly in client code (even one
 * read from a VITE_ env var) ends up baked into the JS bundle and is visible
 * to anyone who opens devtools or the Network tab. This function is the fix:
 * it runs on Cloudflare's servers, not in the browser, so the real Web3Forms
 * access key never reaches the client at all. The browser only ever talks to
 * this same-origin /api/contact endpoint.
 *
 * Set WEB3FORMS_ACCESS_KEY in the Cloudflare Pages dashboard under
 * Settings → Environment variables (Production and Preview). Do NOT prefix
 * it with VITE_ — that prefix is what tells Vite to inline a variable into
 * the client bundle, which is exactly what we're avoiding here.
 */

interface Env {
  WEB3FORMS_ACCESS_KEY: string;
}

interface RequestContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async ({ request, env }: RequestContext): Promise<Response> => {
  const accessKey = env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return json({ success: false, message: "Form is not configured yet. Please email hello@getsopsupport.com directly." }, 500);
  }

  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return json({ success: false, message: "Invalid form submission." }, 400);
  }

  // Honeypot field from the form — if it's filled in, it's a bot. Report
  // success without actually sending anything, so bots don't retry.
  if (incoming.get("botcheck")) {
    return json({ success: true });
  }

  // Rebuild the payload server-side rather than trusting the client's copy,
  // and attach the real access key here — never accept one from the client.
  const forward = new FormData();
  for (const [key, value] of incoming.entries()) {
    if (key === "access_key") continue;
    forward.append(key, value as string);
  }
  forward.append("access_key", accessKey);
  forward.append("subject", "New SOP Support Website Inquiry");
  forward.append("from_name", "SOP Support Website");

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: forward,
  });

  const data = await upstream.json();
  return json(data, upstream.status);
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
