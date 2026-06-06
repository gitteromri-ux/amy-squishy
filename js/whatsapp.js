/* =====================================================================
   AMY SQUISHY — בוט וואטסאפ אינטראקטיבי (עוזר בחירה בזמן אמת)
   ===================================================================== */
(function(){
  const A = window.AMY;
  const css = `
  .wa-fab{position:fixed;bottom:24px;right:24px;z-index:250;width:64px;height:64px;border-radius:50%;
    background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 30px rgba(37,211,102,.45);
    cursor:pointer;transition:transform .3s cubic-bezier(.22,1,.36,1)}
  .wa-fab:hover{transform:scale(1.1) rotate(6deg)}
  .wa-fab svg{width:34px;height:34px;fill:#fff}
  .wa-fab .ping{position:absolute;inset:0;border-radius:50%;background:#25D366;animation:waping 2.4s infinite;z-index:-1}
  @keyframes waping{0%{transform:scale(1);opacity:.6}80%,100%{transform:scale(1.7);opacity:0}}
  .wa-panel{position:fixed;bottom:100px;right:24px;z-index:251;width:370px;max-width:calc(100vw - 32px);
    background:#fff;border-radius:24px;box-shadow:0 30px 80px rgba(0,0,0,.22);overflow:hidden;
    transform:translateY(20px) scale(.96);opacity:0;pointer-events:none;transition:all .35s cubic-bezier(.22,1,.36,1);
    display:flex;flex-direction:column;max-height:600px}
  .wa-panel.open{transform:none;opacity:1;pointer-events:auto}
  .wa-head{background:linear-gradient(135deg,#075E54,#128C7E);color:#fff;padding:16px 18px;display:flex;align-items:center;gap:12px}
  .wa-head .av{width:46px;height:46px;border-radius:50%;background:#fff;overflow:hidden;flex:0 0 auto}
  .wa-head .av img{width:100%;height:100%;object-fit:cover}
  .wa-head b{display:block;font-size:1rem}
  .wa-head small{opacity:.85;font-size:.78rem}
  .wa-head .x{margin-inline-start:auto;font-size:1.4rem;cursor:pointer;opacity:.9}
  .wa-body{background:#ECE5DD;padding:16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:10px}
  .wa-msg{max-width:80%;padding:10px 14px;border-radius:14px;font-size:.92rem;line-height:1.5;animation:wafade .3s}
  @keyframes wafade{from{opacity:0;transform:translateY(8px)}to{opacity:1}}
  .wa-bot{background:#fff;align-self:flex-start;border-top-right-radius:4px}
  .wa-user{background:#DCF8C6;align-self:flex-end;border-top-left-radius:4px}
  .wa-quick{display:flex;flex-wrap:wrap;gap:8px;padding:12px;background:#fff;border-top:1px solid #eee}
  .wa-quick button{background:#fff;border:1.5px solid #25D366;color:#075E54;border-radius:999px;padding:8px 14px;font-size:.84rem;font-weight:600;cursor:pointer;transition:.2s;font-family:inherit}
  .wa-quick button:hover{background:#25D366;color:#fff}
  .wa-rec{display:flex;gap:8px;background:#fff;border-radius:12px;padding:8px;margin-top:4px;align-items:center}
  .wa-rec .e{font-size:1.8rem}
  .wa-rec b{font-size:.86rem;display:block}
  .wa-rec span{font-size:.8rem;color:#075E54;font-weight:700}
  .wa-rec a{margin-inline-start:auto;background:#25D366;color:#fff;border-radius:999px;padding:6px 12px;font-size:.78rem;font-weight:700}
  `;
  const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

  const WA_ICON=`<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>`;

  const body=document.createElement("div");
  body.innerHTML=`
  <div class="wa-panel" id="waPanel">
    <div class="wa-head">
      <div class="av"><img src="assets/img/amy-mascot.png" alt="איימי"></div>
      <div><b>איימי 🩷</b><small>בדרך כלל עונה תוך דקה</small></div>
      <div class="x" id="waClose">×</div>
    </div>
    <div class="wa-body" id="waBody"></div>
    <div class="wa-quick" id="waQuick"></div>
  </div>
  <div class="wa-fab" id="waFab" aria-label="צ'אט עם איימי"><span class="ping"></span>${WA_ICON}</div>`;
  document.getElementById("wa-mount")?.appendChild(body) || document.body.appendChild(body);

  const panel=document.getElementById("waPanel");
  const bodyEl=document.getElementById("waBody");
  const quickEl=document.getElementById("waQuick");
  document.getElementById("waFab").onclick=()=>{panel.classList.toggle("open");if(panel.classList.contains("open")&&!bodyEl.dataset.init){bodyEl.dataset.init=1;start();}};
  document.getElementById("waClose").onclick=()=>panel.classList.remove("open");

  function botMsg(html,delay=400){return new Promise(res=>{setTimeout(()=>{const d=document.createElement("div");d.className="wa-msg wa-bot";d.innerHTML=html;bodyEl.appendChild(d);bodyEl.scrollTop=bodyEl.scrollHeight;res();},delay);});}
  function userMsg(t){const d=document.createElement("div");d.className="wa-msg wa-user";d.textContent=t;bodyEl.appendChild(d);bodyEl.scrollTop=bodyEl.scrollHeight;}
  function quick(opts){quickEl.innerHTML="";opts.forEach(o=>{const b=document.createElement("button");b.textContent=o.label;b.onclick=()=>{userMsg(o.label);quickEl.innerHTML="";o.fn();};quickEl.appendChild(b);});}
  function recCard(p){const c=A.catById(p.cat);return `<div class="wa-rec"><span class="e">${c.emoji}</span><div><b>${p.name}</b><span>₪${p.price.toFixed(2).replace(/\.00$/,"")}</span></div><a href="product.html?id=${p.id}">לצפייה</a></div>`;}

  async function start(){
    await botMsg("היי! אני איימי 🩷 כיף שבאתם!");
    await botMsg("אני אעזור לכם למצוא את הסקווישי המושלם. מה מתחשק לכם היום?",500);
    quick([
      {label:"🔥 הכי נמכרים",fn:bestSellers},
      {label:"⚡ משלוח מהיר",fn:fastShip},
      {label:"💎 דגמי ענק",fn:giants},
      {label:"💰 עד 20 ₪",fn:budget},
      {label:"🚚 זמני משלוח",fn:shipInfo},
    ]);
  }
  async function recommend(list,intro){await botMsg(intro);for(const p of list.slice(0,3)){await botMsg(recCard(p),350);}await botMsg("רוצים שאמשיך לעזור? 😊",400);backToMenu();}
  function backToMenu(){quick([{label:"↩️ תפריט ראשי",fn:start},{label:"🛍️ לכל החנות",fn:()=>location.href="shop.html"}]);}
  function bestSellers(){recommend(A.PRODUCTS.filter(p=>p.badge==="רב מכר"),"אלה הסקווישי שכל ישראל מתה עליהם 🔥");}
  function fastShip(){recommend(A.PRODUCTS.filter(p=>p.fast),"הדגמים שמגיעים אליכם תוך 4 ימי עסקים בלבד ⚡");}
  function giants(){recommend(A.productsByCat("giant").concat(A.PRODUCTS.filter(p=>p.badge==="ענק")),"הדגמים הכי גדולים ומפנקים שיש 💎");}
  function budget(){recommend(A.PRODUCTS.filter(p=>p.price<=20),"שווה לכל כיס — הכל עד 20 ₪ 💰");}
  async function shipInfo(){await botMsg("⏱️ <b>זמני אספקה:</b><br>• רוב הדגמים: 14-21 ימי עסקים<br>• 6 דגמים נבחרים: 4 ימי עסקים בלבד ⚡<br><br>אנחנו שולחים לכל רחבי ישראל! 🇮🇱");backToMenu();}
})();
