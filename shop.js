/* ====================================================================
   AMY SQUISHY — SHOP · full catalog (84 models, 15 categories)
   ==================================================================== */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s));};
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;

var CATS=[{"id":"needoh","name":"נידו","emoji":"🫧","desc":"סקווישי הנידו הקלאסיים — לחיצה, מתיחה ומעיכה אינסופית","t":"#FCE3EC"},{"id":"butter","name":"ספוג / חמאה","emoji":"🧈","desc":"מקלות וקוביות חמאה רכים, האלופים של ההרגעה","t":"#FBEFC9"},{"id":"orbiz","name":"אורביז","emoji":"🔵","desc":"כדורי ג'ל סופגים צבעוניים — מרקם מרגיע ומספק למגע","t":"#D9ECF7"},{"id":"food","name":"אוכל, חטיפים ופירות","emoji":"🍔","desc":"המבורגרים, דאמפלינג, פירות, ארטיקים וכל הפינוקים המתוקים","t":"#FBE3CE"},{"id":"eyepop","name":"מוציא עיניים","emoji":"👀","desc":"לחיצה והעיניים קופצות — האהובים על הילדים","t":"#ECE0FB"},{"id":"animals","name":"בעלי חיים","emoji":"🐙","desc":"קפיברה, תמנון, פנדה, ארנב וחברים נוספים","t":"#FBE6D2"},{"id":"chars","name":"דמויות וגיבורים","emoji":"⭐","desc":"סטיץ', פטריק, אנגרי בירדס ועוד דמויות אהובות","t":"#DCE6FB"},{"id":"water","name":"סקווישי מים","emoji":"💧","desc":"מרקם מימי קריר ומרגיע, ספלאט מושלם","t":"#D5ECF7"},{"id":"ice","name":"סקווישי קרח","emoji":"❄️","desc":"מרקם קריר ומנצנץ — תחושת קרח מרעננת","t":"#E2F1F8"},{"id":"sand","name":"סקווישי חול","emoji":"🏖️","desc":"מרקם חולי קינטי ייחודי, נמס בין האצבעות","t":"#F7ECCB"},{"id":"sticky","name":"דביק / הזרקה","emoji":"🎯","desc":"ספלאט והטחה לקיר — כיף שלא נגמר","t":"#FBD9E6"},{"id":"kawaii","name":"קוואי","emoji":"🌸","desc":"עיצובים מתוקים וחמודים בסטייל יפני","t":"#FBD9F0"},{"id":"popup","name":"פופ-אפ ופידג'ט","emoji":"🔘","desc":"פופ-אפ, קליקרים וצעצועי פידג'ט ממכרים","t":"#FBF0C4"},{"id":"mini","name":"מיני","emoji":"🤏","desc":"סקווישי קטנטנים מושלמים לאיסוף ולקלמר","t":"#FCE3EC"},{"id":"giant","name":"ענק ופרימיום","emoji":"💎","desc":"הדגמים הגדולים והיוקרתיים ביותר במלאי","t":"#EADCFB"}];
var TINT={};CATS.forEach(function(c){TINT[c.id]=c.t;});
var CATNAME={};CATS.forEach(function(c){CATNAME[c.id]=c.name;});
var PRODUCTS=[{"id":"sq-001","name":"תינוק נידו ביישן","cat":"needoh","price":12.9,"badge":"רב מכר","fast":false},{"id":"sq-002","name":"תמנון נידו","cat":"needoh","price":15.9,"badge":null,"fast":false},{"id":"sq-003","name":"שבלול נידו קליקר","cat":"needoh","price":25.9,"badge":null,"fast":false},{"id":"sq-004","name":"נידו דאמפלינג ענקי","cat":"needoh","price":49.9,"badge":"רב מכר","fast":false},{"id":"sq-005","name":"נידו מיני דאמפלינג בסיר אידוי","cat":"needoh","price":32.9,"badge":null,"fast":false},{"id":"sq-006","name":"נידו תפוח עץ","cat":"needoh","price":22.9,"badge":null,"fast":false},{"id":"sq-007","name":"נידו צ'יפס","cat":"needoh","price":24.9,"badge":null,"fast":false},{"id":"sq-008","name":"רביעיית נידו דאמפלינג במגש","cat":"needoh","price":64.9,"badge":"בלעדי","fast":false},{"id":"sq-009","name":"נידו מיני דאמפלינג","cat":"needoh","price":18.9,"badge":null,"fast":false},{"id":"sq-010","name":"נידו מיני משולש גבינה","cat":"needoh","price":18.9,"badge":null,"fast":false},{"id":"sq-011","name":"נידו דאמפלינג בסיר אידוי","cat":"needoh","price":38.9,"badge":null,"fast":false},{"id":"sq-012","name":"נידו כדור שייש","cat":"needoh","price":26.9,"badge":null,"fast":false},{"id":"sq-013","name":"נידו ראש קפיברה חמוד","cat":"needoh","price":20,"badge":null,"fast":false},{"id":"sq-014","name":"נידו דובי","cat":"needoh","price":20,"badge":null,"fast":false},{"id":"sq-015","name":"ארנב נידו עיניים בולטות","cat":"eyepop","price":15.9,"badge":"רב מכר","fast":false},{"id":"sq-016","name":"ביצת נידו קטנה פרצוף","cat":"eyepop","price":6.9,"badge":null,"fast":false},{"id":"sq-017","name":"צפרדע מוציא עיניים","cat":"eyepop","price":14.9,"badge":null,"fast":false},{"id":"sq-018","name":"חתול מוציא עיניים","cat":"eyepop","price":14.9,"badge":null,"fast":false},{"id":"sq-019","name":"כדור חול קינטי לחיץ","cat":"sand","price":16.9,"badge":null,"fast":false},{"id":"sq-020","name":"לב חול קינטי","cat":"sand","price":17.9,"badge":null,"fast":false},{"id":"sq-021","name":"כוכב חול קינטי","cat":"sand","price":17.9,"badge":null,"fast":false},{"id":"sq-022","name":"אנגרי בירדס מים","cat":"water","price":7,"badge":null,"fast":false},{"id":"sq-023","name":"עכבר מים","cat":"water","price":7,"badge":null,"fast":false},{"id":"sq-024","name":"תפוז מים","cat":"water","price":7,"badge":null,"fast":false},{"id":"sq-025","name":"דאמפלינג קרח-מים מנצנץ","cat":"ice","price":28.9,"badge":"רב מכר","fast":false},{"id":"sq-026","name":"ענב מים","cat":"water","price":7,"badge":null,"fast":false},{"id":"sq-027","name":"ספוג חמאה זהב","cat":"butter","price":19.9,"badge":"רב מכר","fast":false},{"id":"sq-028","name":"ספוג חמאה ארצות הברית","cat":"butter","price":19.9,"badge":null,"fast":false},{"id":"sq-029","name":"ספוג חמאה אנגליה","cat":"butter","price":19.9,"badge":null,"fast":false},{"id":"sq-030","name":"ספוג חמאה לבנה","cat":"butter","price":19.9,"badge":null,"fast":false},{"id":"sq-031","name":"ספוג חמאה צהובה","cat":"butter","price":19.9,"badge":null,"fast":false},{"id":"sq-032","name":"ספוג חמאה צבעונית","cat":"butter","price":19.9,"badge":null,"fast":false},{"id":"sq-033","name":"קוביית חמאה אנגלית","cat":"butter","price":24.9,"badge":null,"fast":false},{"id":"sq-034","name":"חמאה ורודה ענקית","cat":"butter","price":44.9,"badge":"ענק","fast":false},{"id":"sq-035","name":"חמאה צבעונית ענקית","cat":"butter","price":44.9,"badge":null,"fast":false},{"id":"sq-036","name":"חמאה צהובה ענקית","cat":"butter","price":44.9,"badge":null,"fast":false},{"id":"sq-037","name":"מקל חמאה","cat":"butter","price":22,"badge":null,"fast":false},{"id":"sq-038","name":"המבורגר נידו","cat":"food","price":28.9,"badge":null,"fast":false},{"id":"sq-039","name":"נידו מיני קלח תירס","cat":"food","price":16.9,"badge":null,"fast":false},{"id":"sq-040","name":"ג'ורדן נעל נידו","cat":"food","price":20.9,"badge":null,"fast":false},{"id":"sq-041","name":"נידו נעל נייק","cat":"food","price":24.9,"badge":null,"fast":false},{"id":"sq-042","name":"נאגטס ענק נידו","cat":"food","price":45,"badge":"מלאי מוגבל","fast":false},{"id":"sq-043","name":"פרייד צ'יקן ענק נידו","cat":"food","price":52.9,"badge":"מלאי מוגבל","fast":false},{"id":"sq-044","name":"נידו אדממה","cat":"food","price":19.9,"badge":null,"fast":false},{"id":"sq-045","name":"משולש גבינה צהובה","cat":"food","price":15,"badge":null,"fast":false},{"id":"sq-046","name":"אבטיח מצחיק נידו","cat":"food","price":18.9,"badge":null,"fast":false},{"id":"sq-047","name":"נידו מיני אננס","cat":"food","price":16.9,"badge":null,"fast":false},{"id":"sq-048","name":"נידו עגבניית שרי","cat":"food","price":14.9,"badge":null,"fast":false},{"id":"sq-049","name":"נידו מנגו פרימיום","cat":"food","price":29.9,"badge":"פרימיום","fast":false},{"id":"sq-050","name":"נידו גזר יפני צהוב ענקי","cat":"food","price":45,"badge":"ענק","fast":false},{"id":"sq-051","name":"מנגו לחיץ","cat":"food","price":15,"badge":null,"fast":false},{"id":"sq-052","name":"אבטיח גדול אורביז","cat":"orbiz","price":15,"badge":null,"fast":false},{"id":"sq-053","name":"נידו גזר ענק מחליף צבע","cat":"food","price":45,"badge":"ענק","fast":false},{"id":"sq-054","name":"אבטיח ענק נידו","cat":"food","price":45,"badge":"ענק","fast":false},{"id":"sq-055","name":"זוג לימונים פרצופים","cat":"food","price":15,"badge":null,"fast":false},{"id":"sq-056","name":"נידו קפיברה ענק","cat":"animals","price":54.9,"badge":"רב מכר","fast":false},{"id":"sq-057","name":"נידו כריש ענק","cat":"animals","price":49.9,"badge":null,"fast":false},{"id":"sq-058","name":"נידו אווז בר ענקי","cat":"animals","price":46.9,"badge":null,"fast":false},{"id":"sq-059","name":"נידו פנדה ביישנית","cat":"animals","price":24.9,"badge":null,"fast":false},{"id":"sq-060","name":"נידו קפיברה גדול פרימיום","cat":"animals","price":42.9,"badge":"פרימיום","fast":false},{"id":"sq-061","name":"קפיברה דביקה","cat":"animals","price":15,"badge":null,"fast":false},{"id":"sq-062","name":"ארנב גלידה בגביע","cat":"animals","price":20,"badge":null,"fast":false},{"id":"sq-063","name":"דובון לחיץ","cat":"animals","price":15,"badge":null,"fast":false},{"id":"sq-064","name":"סטיץ' נידו גדול","cat":"chars","price":18.9,"badge":"רב מכר","fast":false},{"id":"sq-065","name":"פטריק סטאר בוב ספוג","cat":"chars","price":15,"badge":null,"fast":false},{"id":"sq-066","name":"דמויות אגי פארטי","cat":"chars","price":15,"badge":null,"fast":false},{"id":"sq-067","name":"חד קרן אורות מהבהבים","cat":"chars","price":15,"badge":null,"fast":false},{"id":"sq-068","name":"בובת חד קרן","cat":"chars","price":15,"badge":null,"fast":false},{"id":"sq-069","name":"פופ אפ תות דובי ורוד","cat":"sticky","price":12.9,"badge":null,"fast":false},{"id":"sq-070","name":"כדור אורביז גדול דביק","cat":"orbiz","price":20,"badge":null,"fast":false},{"id":"sq-071","name":"כדור ספלאט גלגל עין","cat":"sticky","price":15,"badge":null,"fast":false},{"id":"sq-072","name":"ארטיק צבעוני דביק","cat":"food","price":20,"badge":null,"fast":false},{"id":"sq-073","name":"חפיסת שוקולד","cat":"food","price":25,"badge":null,"fast":false},{"id":"sq-074","name":"שוקולד רובי ורוד","cat":"food","price":26.9,"badge":null,"fast":false},{"id":"sq-075","name":"חתול קוואי","cat":"kawaii","price":15,"badge":null,"fast":false},{"id":"sq-076","name":"נידו מיני לב קטן קוואי","cat":"kawaii","price":12.9,"badge":null,"fast":false},{"id":"sq-077","name":"קקי מחייך לחיץ","cat":"popup","price":15,"badge":null,"fast":false},{"id":"sq-078","name":"פופ אפ דובי תות","cat":"popup","price":13.9,"badge":null,"fast":false},{"id":"sq-079","name":"נידו מיני תות שדה","cat":"mini","price":13.9,"badge":null,"fast":false},{"id":"sq-080","name":"נידו מיני ביצה","cat":"mini","price":11.9,"badge":null,"fast":false},{"id":"sq-081","name":"ביצת נידו קטנה","cat":"mini","price":6.9,"badge":null,"fast":false},{"id":"sq-082","name":"נידו בוטן ענק פרימיום","cat":"giant","price":59.9,"badge":"פרימיום","fast":false},{"id":"sq-083","name":"קופסת הפתעה ענקית","cat":"giant","price":100,"badge":"בלעדי","fast":false},{"id":"sq-084","name":"שקית הפתעות גדולה","cat":"giant","price":60,"badge":"בלעדי","fast":false}];
var money=function(p){return '₪'+(Math.round(p*100)/100).toFixed(2).replace(/\.00$/,'');};
function imgUrl(id){return (window.__resources&&window.__resources[id])||('assets/products/'+id+'.webp');}

/* ---------- cart (shared via localStorage) ---------- */
function cartGet(){try{return parseInt(localStorage.getItem('amy_cart')||'0',10)||0;}catch(e){return 0;}}
function cartSet(n){try{localStorage.setItem('amy_cart',n);}catch(e){}paintCart(n);}
function paintCart(n){n=(n==null?cartGet():n);var a=$('#cartN');if(a)a.textContent=n;var d=$('.tab .dot');if(d)d.textContent=n;}
paintCart();

/* ---------- state ---------- */
var initCat=(location.hash||'').replace('#','');
var validCat=initCat&&CATS.some(function(c){return c.id===initCat;});
var state={cat:validCat?initCat:'all',q:'',sort:'featured'};

/* ---------- category tabs ---------- */
(function(){
 var el=$('#catTabs');if(!el)return;
 var counts={all:PRODUCTS.length};
 PRODUCTS.forEach(function(p){counts[p.cat]=(counts[p.cat]||0)+1;});
 var tabs=[{id:'all',name:'הכל',emoji:'🛍️'}].concat(CATS);
 el.innerHTML=tabs.map(function(c){
  return '<button class="cat-tab'+(c.id===state.cat?' on':'')+'" data-cat="'+c.id+'"><span class="e">'+c.emoji+'</span>'+c.name+'<span class="cnt">'+(counts[c.id]||0)+'</span></button>';
 }).join('');
 var cur=el.querySelector('.cat-tab.on');if(cur)setTimeout(function(){cur.scrollIntoView({inline:'center',block:'nearest'});},60);
 el.addEventListener('click',function(e){
  var b=e.target.closest('.cat-tab');if(!b)return;
  $$('.cat-tab',el).forEach(function(t){t.classList.remove('on');});
  b.classList.add('on');state.cat=b.getAttribute('data-cat');
  var act=el.querySelector('.cat-tab.on');if(act)act.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  render();
 });
}());

/* ---------- search + sort ---------- */
(function(){
 var s=$('#shopSearch');if(s)s.addEventListener('input',function(){state.q=s.value.trim();render();});
 var so=$('#shopSort');if(so)so.addEventListener('change',function(){state.sort=so.value;render();});
}());

/* ---------- render grid ---------- */
function filtered(){
 var list=PRODUCTS.filter(function(p){
  if(state.cat!=='all'&&p.cat!==state.cat)return false;
  if(state.q&&p.name.indexOf(state.q)<0&&(CATNAME[p.cat]||'').indexOf(state.q)<0)return false;
  return true;
 });
 if(state.sort==='low')list=list.slice().sort(function(a,b){return a.price-b.price;});
 else if(state.sort==='high')list=list.slice().sort(function(a,b){return b.price-a.price;});
 else if(state.sort==='name')list=list.slice().sort(function(a,b){return a.name.localeCompare(b.name,'he');});
 return list;
}
function card(p){
 return '<article class="pcard" style="--tint:'+(TINT[p.cat]||'#FCE3EC')+'">'+
  '<div class="pmedia">'+
   (p.badge?'<span class="pbadge">'+p.badge+'</span>':'')+
   (p.fast?'<span class="pfast">⚡ אקספרס</span>':'')+
   '<img src="'+imgUrl(p.id)+'" alt="'+p.name+'"></div>'+
  '<div class="pbody"><span class="pcat">'+(CATNAME[p.cat]||'')+'</span>'+
   '<h3>'+p.name+'</h3>'+
   '<div class="pfoot"><span class="pprice">'+money(p.price)+'</span>'+
   '<button class="padd" data-id="'+p.id+'" aria-label="הוספה לעגלה">הוספה <span>🛒</span></button></div></div></article>';
}
function render(){
 var grid=$('#shopGrid'),empty=$('#shopEmpty'),count=$('#shopCount');
 if(!grid)return;
 var list=filtered();
 if(count)count.textContent=list.length+' דגמים';
 if(!list.length){grid.innerHTML='';if(empty)empty.hidden=false;return;}
 if(empty)empty.hidden=true;
 grid.innerHTML=list.map(card).join('');
}
render();

/* ---------- add to cart ---------- */
document.addEventListener('click',function(e){
 var b=e.target.closest&&e.target.closest('.padd');if(!b)return;
 cartSet(cartGet()+1);
 var n=$('#cartN');if(n){n.classList.add('pop');setTimeout(function(){n.classList.remove('pop');},300);}
 b.classList.add('added');var t=b.childNodes[0];b.querySelector('span').textContent='✓';
 setTimeout(function(){b.classList.remove('added');b.querySelector('span').textContent='🛒';},900);
 if(reduce)return;
 var r=b.getBoundingClientRect(),c=(n?n.getBoundingClientRect():{left:r.left,top:0,width:0,height:0});
 var fly=document.createElement('span');fly.textContent='🛒';
 fly.style.cssText='position:fixed;z-index:300;left:'+(r.left+r.width/2)+'px;top:'+r.top+'px;font-size:20px;pointer-events:none;transition:transform .6s cubic-bezier(.4,0,.2,1),opacity .6s;transform:translate(-50%,-50%)';
 document.body.appendChild(fly);
 requestAnimationFrame(function(){fly.style.transform='translate('+(c.left-r.left-r.width/2+c.width/2)+'px,'+(c.top-r.top+c.height/2)+'px) scale(.4)';fly.style.opacity='0';});
 setTimeout(function(){fly.remove();},650);
});

/* ---------- topbar shadow ---------- */
(function(){var tb=$('#topbar');if(!tb)return;window.addEventListener('scroll',function(){tb.style.background=window.scrollY>30?'rgba(255,245,248,.96)':'rgba(255,245,248,.8)';},{passive:true});}());

/* ---------- whatsapp ---------- */
(function(){
 var fab=$('#waFab'),panel=$('#waPanel'),close=$('#waClose');if(!fab||!panel)return;
 fab.addEventListener('click',function(){panel.classList.toggle('open');});
 if(close)close.addEventListener('click',function(){panel.classList.remove('open');});
 $$('.wa-q',panel).forEach(function(q){q.addEventListener('click',function(){
  var body=$('#waBody');var u=document.createElement('div');u.className='wa-msg user';u.textContent=q.textContent;body.appendChild(u);
  setTimeout(function(){var bmsg=document.createElement('div');bmsg.className='wa-msg bot';bmsg.textContent='מעולה! איימי תחזור אליכם עם כל הפרטים 🩷';body.appendChild(bmsg);body.scrollTop=body.scrollHeight;},600);
  body.scrollTop=body.scrollHeight;
 });});
}());

/* ---------- reveal ---------- */
(function(){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.06});
 $$('.reveal').forEach(function(el){io.observe(el);});
}());

})();
