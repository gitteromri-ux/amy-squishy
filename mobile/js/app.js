/* =====================================================================
   AMY SQUISHY — App core: nav, cart, render helpers, animations
   ===================================================================== */
(function(){
  const A = window.AMY;

  /* ---------- Cart (localStorage) ---------- */
  const CART_KEY = "amy_cart";
  function getCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch(e){return[]} }
  function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); }
  function addToCart(id,qty=1){
    const c=getCart(); const ex=c.find(i=>i.id===id);
    if(ex) ex.qty+=qty; else c.push({id,qty});
    saveCart(c);
    const p=A.productById(id);
    toast("✓ "+(p?p.name:"מוצר")+" נוסף לעגלה");
  }
  function removeFromCart(id){ saveCart(getCart().filter(i=>i.id!==id)); }
  function setQty(id,qty){ const c=getCart();const it=c.find(i=>i.id===id);if(it){it.qty=Math.max(1,qty);saveCart(c);} }
  function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
  function cartTotal(){ return getCart().reduce((s,i)=>{const p=A.productById(i.id);return s+(p?p.price*i.qty:0)},0); }
  function updateCartCount(){ document.querySelectorAll(".cart-count").forEach(el=>{const n=cartCount();el.textContent=n;el.setAttribute("data-n",n);}); }

  /* ---------- Toast ---------- */
  let toastEl;
  function toast(msg){
    if(!toastEl){toastEl=document.createElement("div");toastEl.className="toast";document.body.appendChild(toastEl);}
    toastEl.textContent=msg; toastEl.classList.add("show");
    clearTimeout(toastEl._t); toastEl._t=setTimeout(()=>toastEl.classList.remove("show"),2200);
  }

  /* ---------- Product card HTML (premium / Amazon-class) ---------- */
  function prodCard(p){
    const cat=A.catById(p.cat);
    const fast=p.fast;
    const price = "₪"+p.price.toFixed(2).replace(/\.00$/,"");
    return `
    <article class="prod-card reveal">
      <a href="product.html?id=${p.id}" class="prod-media" aria-label="${p.name}">
        <div class="prod-badges">
          ${p.badge?`<span class="badge">${p.badge}</span>`:""}
          ${fast?`<span class="badge fast">⚡ 4 ימים</span>`:""}
        </div>
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="if(!this.dataset.r){this.dataset.r=1;this.src=this.src.split('?')[0]+'?r='+Date.now();}else{this.style.display='none';this.nextElementSibling.style.display='flex';}">
        <span class="sq" style="display:none">${p.emoji||cat.emoji}</span>
        <button class="quick-add" data-add="${p.id}" aria-label="הוסף לעגלה מהיר">＋ הוסף לעגלה</button>
      </a>
      <div class="prod-body">
        <span class="prod-cat">${cat.emoji} ${cat.name}</span>
        <a href="product.html?id=${p.id}"><h3 class="prod-name">${p.name}</h3></a>
        <div class="ship-tag ${fast?"fast":""}">${fast?"⚡":"🚚"} ${A.shipText(p)}</div>
        <div class="prod-foot">
          <div class="price-wrap"><span class="prod-price">${price}</span></div>
          <button class="add-btn" data-add="${p.id}" aria-label="הוסף לעגלה">＋</button>
        </div>
      </div>
    </article>`;
  }

  /* ---------- Nav + Footer injection ---------- */
  const LOGO=`<svg class="logo" viewBox="0 0 48 48" fill="none" aria-label="Amy Squishy">
    <circle cx="24" cy="24" r="22" fill="#F7B5C4"/>
    <circle cx="24" cy="26" r="14" fill="#FFFCFD"/>
    <circle cx="19" cy="24" r="2.4" fill="#1A1518"/><circle cx="29" cy="24" r="2.4" fill="#1A1518"/>
    <path d="M19 30 Q24 34 29 30" stroke="#1A1518" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <circle cx="15" cy="28" r="2.4" fill="#F7B5C4"/><circle cx="33" cy="28" r="2.4" fill="#F7B5C4"/>
    <path d="M24 6 L27 11 L21 11 Z" fill="#7FC4DD"/>
  </svg>`;

  function navHTML(active){
    const link=(href,label,id)=>`<a href="${href}"${active===id?' style="color:var(--pink-deep)"':''}>${label}</a>`;
    return `<div class="announce">🚚 משלוח חינם בקנייה מעל 149 ₪<span class="sep">·</span>⚡ 6 דגמים במשלוח אקספרס<span class="sep">·</span><a href="track.html">מעקב הזמנה ←</a></div>
    <nav class="nav"><div class="container">
      <a class="brand" href="index.html">${LOGO}<span>איימי <b>סקווישי</b></span></a>
      <div class="nav-links" id="navLinks">
        <form class="nav-search" onsubmit="event.preventDefault();var q=this.q.value.trim();location.href='shop.html'+(q?'?search='+encodeURIComponent(q):'')" role="search">
          <span class="ico">🔍</span>
          <input name="q" type="search" placeholder="חפשו סקווישי... נידו, תמנון, אבטיח" aria-label="חיפוש באתר" autocomplete="off">
        </form>
        ${link("index.html","בית","home")}
        ${link("shop.html","חנות","shop")}
        ${link("blog.html","בלוג","blog")}
        ${link("track.html","מעקב משלוח","track")}
        ${link("about.html","הסיפור שלנו","about")}
      </div>
      <div class="nav-actions">
        <button class="cart-btn" onclick="location.href='cart.html'" aria-label="עגלת קניות">🛍️<span class="cart-count">0</span></button>
        <button class="menu-toggle" id="menuToggle" aria-label="תפריט">☰</button>
      </div>
    </div></nav>`;
  }

  function footerHTML(){
    const catLinks=A.CATEGORIES.slice(0,6).map(c=>`<a href="shop.html#${c.id}">${c.emoji} ${c.name}</a>`).join("");
    return `<footer class="footer"><div class="container">
      <div>
        <div class="brand">${LOGO}<span>איימי <b>סקווישי</b></span></div>
        <p>מגוון הסקווישי הגדול בישראל 🇮🇱<br>איימי מנגישה את הסקווישי הכי שווים לכל בית.</p>
        <p style="margin-top:14px">📞 03-555-0199<br>✉️ hi@amysquishy.co.il</p>
      </div>
      <div><h4>קטגוריות</h4>${catLinks}</div>
      <div><h4>קישורים</h4>
        <a href="shop.html">כל המוצרים</a><a href="blog.html">בלוג סקווישי</a>
        <a href="track.html">מעקב משלוח</a><a href="cart.html">העגלה שלי</a>
      </div>
      <div><h4>מידע</h4>
        <a href="terms.html">תקנון ותנאי שימוש</a><a href="terms.html#ship">משלוחים והחזרות</a>
        <a href="about.html">הסיפור שלנו</a><a href="track.html">פורטל לקוחות</a>
      </div>
    </div>
    <div class="container foot-bottom">© ${new Date().getFullYear()} איימי סקווישי · כל הזכויות שמורות · נבנה באהבה 🩷</div>
    </footer>`;
  }

  function mountChrome(active){
    const nav=document.getElementById("nav-mount"); if(nav) nav.innerHTML=navHTML(active);
    const ft=document.getElementById("footer-mount"); if(ft) ft.innerHTML=footerHTML();
    updateCartCount();
    // mobile menu
    const mt=document.getElementById("menuToggle");
    if(mt) mt.addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
  }

  /* ---------- Scroll reveal (robust: observer + viewport + safety fallback) ---------- */
  function initReveal(){
    const els=document.querySelectorAll(".reveal:not(.in)");
    if(!els.length) return;
    // reveal anything already in/near the viewport immediately (no blank cards on load)
    const vh=window.innerHeight||800;
    els.forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top < vh*1.1) el.classList.add("in"); });
    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(e=>e.classList.add("in")); return;
    }
    const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}})},{threshold:.08,rootMargin:"0px 0px 80px 0px"});
    document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el));
    // safety net: never leave content hidden
    setTimeout(()=>document.querySelectorAll(".reveal:not(.in)").forEach(e=>{const r=e.getBoundingClientRect();if(r.top<(window.innerHeight||800)*1.5)e.classList.add("in");}),1200);
  }

  /* ---------- Global click handler for add buttons ---------- */
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-add]");
    if(b){e.preventDefault();addToCart(b.getAttribute("data-add"));}
  });

  /* expose */
  window.AmyApp={prodCard,mountChrome,initReveal,addToCart,removeFromCart,setQty,getCart,saveCart,cartTotal,cartCount,toast,LOGO};
})();
