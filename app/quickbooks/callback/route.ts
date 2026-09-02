import { NextRequest } from "next/server";

// OAuth 2.0 redirect target for the Orriq QuickBooks Assistant.
// Intuit sends the user here after they approve the connection, with
// ?code=...&realmId=...&state=...  (or ?error=... on failure).
// We do not exchange the code here (that requires the client secret and is
// completed by the operator); we present the result cleanly.

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

function page(title: string, bodyHtml: string): Response {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc(title)} · Orriq QuickBooks Assistant</title>
<style>
:root{color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;min-height:100dvh;display:flex;align-items:center;justify-content:center;
background:#000;color:#F5F5F7;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;padding:24px}
.card{width:100%;max-width:560px;background:#0A0A0C;border:1px solid rgba(255,255,255,.08);
border-radius:20px;padding:32px 28px}
h1{font-size:22px;margin:0 0 6px;letter-spacing:-.01em}
p{color:#C9CBD1;line-height:1.6;font-size:15px;margin:0 0 14px}
.eyebrow{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.18em;
text-transform:uppercase;color:#2DD4BF;margin-bottom:14px}
.row{margin-top:16px}
.label{font-family:ui-monospace,monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8A8C94;margin-bottom:4px}
code{display:block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;
background:#0F1014;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:10px 12px;
color:#5EEAD4;word-break:break-all}
.muted{color:#8A8C94;font-size:13px;margin-top:20px}
a{color:#2DD4BF}
.ok{color:#2DD4BF} .err{color:#F87171}
</style></head><body><div class="card">${bodyHtml}</div></body></html>`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const error = q.get("error");
  const code = q.get("code");
  const realmId = q.get("realmId");
  const state = q.get("state") ?? "";

  if (error) {
    return page(
      "Connection cancelled",
      `<div class="eyebrow">QuickBooks</div>
       <h1 class="err">Connection was not completed</h1>
       <p>Intuit reported: <strong>${esc(error)}</strong>.</p>
       <p>You can <a href="/quickbooks/connect">try connecting again</a>, or email
       <a href="mailto:jon@orriq.com">jon@orriq.com</a> for help.</p>`,
    );
  }

  if (!code || !realmId) {
    return page(
      "QuickBooks callback",
      `<div class="eyebrow">QuickBooks</div>
       <h1>Nothing to show here</h1>
       <p>This page is the connection callback for the Orriq QuickBooks Assistant.
       To connect, start from <a href="/quickbooks/connect">the connect page</a>.</p>`,
    );
  }

  return page(
    "Connected",
    `<div class="eyebrow">QuickBooks</div>
     <h1 class="ok">✅ Connected to QuickBooks</h1>
     <p>Your QuickBooks company has been authorised for the Orriq QuickBooks
     Assistant. To finish setup, share the details below with your Orriq
     administrator. These values expire shortly.</p>
     <div class="row"><div class="label">Company (Realm) ID</div><code>${esc(realmId)}</code></div>
     <div class="row"><div class="label">Authorization code</div><code>${esc(code)}</code></div>
     ${state ? `<div class="row"><div class="label">State</div><code>${esc(state)}</code></div>` : ""}
     <p class="muted">You can close this tab once the details have been passed on.
     Manage the connection any time from <a href="/quickbooks/disconnect">QuickBooks apps</a>.</p>`,
  );
}
