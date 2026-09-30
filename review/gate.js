// Passphrase gate for the public preview. Injected by scripts/build_preview.py.
//
// NOT SECURITY. The expected hash ships in this page, and the page source is
// public anyway (thirstypig/vipok-preview). It keeps casual visitors and
// crawlers out of an unfinished site; anything truly private needs server-side
// auth (Cloudflare Access). Remove before launch.
(() => {
  const cfg = window.VIPOK_REVIEW || {};
  if (!cfg.hash) return;
  const KEY = "vipok-review-unlocked";
  const SALT = "vipok-preview:";
  const root = document.documentElement;

  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch {}
  if (stored === cfg.hash) return;             // unlocked before, same passphrase

  root.classList.add("vr-locked");
  const style = document.createElement("style");
  // Hidden (not display:none) so the layout is ready the moment it unlocks;
  // hidden content also can't take keyboard focus.
  style.textContent = `
html.vr-locked body{visibility:hidden;overflow:hidden}
#vr-gate{visibility:visible;position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:16px;
  background:var(--bg,#f5f7fc);color:var(--ink,#0f1a44);font:16px/1.5 var(--body,system-ui,sans-serif)}
#vr-gate form{width:min(360px,100%);display:grid;gap:10px;padding:24px;border-radius:14px;
  background:var(--surface,#fff);border:1px solid var(--line,#d6dcec);box-shadow:var(--shadow,0 8px 24px rgba(0,0,0,.1))}
#vr-gate .vr-gate-title{margin:0;font-weight:700;font-size:18px}
#vr-gate .vr-gate-note{margin:0;color:var(--muted,#4e5b86);font-size:14px}
#vr-gate label{font-weight:600;font-size:14px}
#vr-gate input{font:inherit;padding:10px 12px;border-radius:8px;border:1px solid var(--line,#d6dcec);
  background:var(--bg,#f5f7fc);color:inherit}
#vr-gate button{font:inherit;font-weight:600;padding:10px 12px;border:0;border-radius:8px;cursor:pointer;
  background:var(--brand,#1b39ad);color:var(--on-brand,#fff)}
#vr-gate .vr-gate-err{margin:0;min-height:1.5em;color:var(--ink,#0f1a44);font-size:14px}`;
  document.head.appendChild(style);

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function mount() {
    const gate = document.createElement("div");
    gate.id = "vr-gate";
    gate.innerHTML = `
<form novalidate>
  <p class="vr-gate-title">VIPOK preview</p>
  <p class="vr-gate-note">This preview is for invited reviewers. Enter the passphrase you were given.</p>
  <label for="vr-pass">Passphrase</label>
  <input id="vr-pass" type="password" autocomplete="current-password" required>
  <button type="submit">Enter preview</button>
  <p class="vr-gate-err" role="alert"></p>
</form>`;
    document.body.appendChild(gate);
    const input = gate.querySelector("input");
    const err = gate.querySelector(".vr-gate-err");
    input.focus();
    gate.querySelector("form").addEventListener("submit", async e => {
      e.preventDefault();
      if ((await sha256(SALT + input.value)) !== cfg.hash) {
        err.textContent = "That passphrase didn't match. Try again.";
        input.select();
        return;
      }
      try { localStorage.setItem(KEY, cfg.hash); } catch {}
      gate.remove();
      root.classList.remove("vr-locked");
      document.dispatchEvent(new CustomEvent("vr-unlocked"));
    });
  }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
