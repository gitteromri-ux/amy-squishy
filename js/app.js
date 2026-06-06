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

  /* ---------- Product card HTML ---------- */
  function prodCard(p){
    const cat=A.catById(p.cat);
    const fast=p.fast;
    return `
    <article class="prod-card reveal">
      <a href="product.html?id=${p.id}" class="prod-media" aria-label="${p.name}">
        ${p.badge?`<span class="badge">${p.badge}</span>`:""}
        ${fast?`<span class="badge fast">⚡ 4 ימים</span>`:""}
        <span class="sq">${p.emoji||cat.emoji}</span>
      </a>
      <div class="prod-body">
        <span class="prod-cat">${cat.emoji} ${cat.name.split(" ")[0]}</span>
        <a href="product.html?id=${p.id}"><h3 class="prod-name">${p.name}</h3></a>
        <div class="ship-tag ${fast?"fast":""}">🚚 ${A.shipText(p)}</div>
        <div class="prod-foot">
          <span class="prod-price">₪${p.price.toFixed(2).replace(/\.00$/,"")} </span>
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
    return `<nav class="nav"><div class="container">
      <a class="brand" href="index.html">${LOGO}<span>איימי <b>סקווישי</b></span></a>
      <div class="nav-links" id="navLinks">
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

  /* ---------- Scroll reveal ---------- */
  function initReveal(){
    const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}})},{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
  }

  /* ---------- Global click handler for add buttons ---------- */
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-add]");
    if(b){e.preventDefault();addToCart(b.getAttribute("data-add"));}
  });

  /* expose */
  window.AmyApp={prodCard,mountChrome,initReveal,addToCart,removeFromCart,setQty,getCart,saveCart,cartTotal,cartCount,toast,LOGO};
})();
