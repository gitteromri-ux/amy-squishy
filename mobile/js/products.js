/* =====================================================================
   AMY SQUISHY — קטלוג מוצרים מלא
   15 קטגוריות סקווישי רשמיות | איחוד מ-3 אתרי מקור + דגמים נוספים
   ===================================================================== */

// 15 הקטגוריות הרשמיות
const CATEGORIES = [
  { id: "needoh",   name: "נידו",                    emoji: "🫧", desc: "סקווישי הנידו הקלאסיים — לחיצה, מתיחה ומעיכה אינסופית" },
  { id: "eyepop",   name: "מוציא עיניים",          emoji: "👀", desc: "לחיצה והעיניים קופצות — האהובים על הילדים" },
  { id: "sand",     name: "סקווישי חול",           emoji: "🏖️", desc: "מרקם חולי קינטי ייחודי, נמס בין האצבעות" },
  { id: "water",    name: "סקווישי מים",           emoji: "💧", desc: "מרקם מימי קריר ומרגיע, ספלאט מושלם" },
  { id: "butter",   name: "ספוג / חמאה",           emoji: "🧈", desc: "מקלות וקוביות חמאה רכים, האלופים של ההרגעה" },
  { id: "food",     name: "אוכל וחטיפים",          emoji: "🍔", desc: "המבורגרים, צ'יפס, דאמפלינג ועוד פינוקים" },
  { id: "fruit",    name: "פירות וירקות",          emoji: "🍉", desc: "אבטיח, מנגו, תות, גזר — קייצי ומרענן" },
  { id: "animals",  name: "בעלי חיים",             emoji: "🐙", desc: "קפיברה, תמנון, פנדה, ארנב וחברים נוספים" },
  { id: "chars",    name: "דמויות וגיבורים",       emoji: "⭐", desc: "סטיץ', פטריק, אנגרי בירדס ועוד דמויות אהובות" },
  { id: "sticky",   name: "דביק / הזרקה",          emoji: "🎯", desc: "ספלאט, אורביז והטחה לקיר — כיף שלא נגמר" },
  { id: "dessert",  name: "ארטיק וקינוחים",        emoji: "🍦", desc: "ארטיקים, גלידות ושוקולד מתוקים" },
  { id: "kawaii",   name: "קוואי",                 emoji: "🌸", desc: "עיצובים מתוקים וחמודים בסטייל יפני" },
  { id: "popup",    name: "פופ-אפ ופידג'ט",        emoji: "🔘", desc: "פופ-אפ, קליקרים וצעצועי פידג'ט ממכרים" },
  { id: "mini",     name: "מיני",                  emoji: "🤏", desc: "סקווישי קטנטנים מושלמים לאיסוף ולקלמר" },
  { id: "giant",    name: "ענק ופרימיום",          emoji: "💎", desc: "הדגמים הגדולים והיוקרתיים ביותר במלאי" },
];

// זמני אספקה
const SHIP_STD = "14-21 ימי עסקים";
const SHIP_FAST = "4 ימי עסקים";

// כותרות תמונה — 5 זוויות אחידות לכל מוצר
const ANGLES = ["חזית", "זווית", "מאחור", "פירוט מרקם", "בשימוש"];

/* פונקציית עזר ליצירת מוצר */
let _pid = 0;
function P(name, cat, price, opts = {}) {
  _pid++;
  const id = "sq-" + String(_pid).padStart(3, "0");
  return {
    id,
    name,
    cat,
    price,
    fast: !!opts.fast,
    badge: opts.badge || null,         // "רב מכר" | "חדש" | "בלעדי" | "מלאי מוגבל"
    source: opts.source || "",
    desc: opts.desc || "",
    emoji: opts.emoji || "🫧",         // אימוג'י ייחודי לכל דגם
    img: `../assets/products/${id}.png`,  // תמונה ראשית אחידה
  };
}

/* =====================================================================
   המוצרים — כל הדגמים מ-3 אתרי המקור, ממוינים ל-15 קטגוריות
   מקורות: Pinky Fidgets, Gilgi, Sindya
   ===================================================================== */
const PRODUCTS = [
  // ---------- נידו (Nee-Doh) ----------
  P("תינוק נידו ביישן", "needoh", 12.9, { emoji: "👶",  badge: "רב מכר", source: "Pinky Fidgets" }),
  P("תמנון נידו", "needoh", 15.9, { emoji: "🐙",  source: "Pinky Fidgets" }),
  P("שבלול נידו קליקר", "needoh", 25.9, { emoji: "🐌",  source: "Pinky Fidgets" }),
  P("נידו דאמפלינג ענקי", "needoh", 49.9, { emoji: "🥟",  badge: "רב מכר", source: "Gilgi" }),
  P("נידו מיני דאמפלינג בסיר אידוי", "needoh", 32.9, { emoji: "🥟",  source: "Gilgi" }),
  P("נידו תפוח עץ", "needoh", 22.9, { emoji: "🍎",  source: "Gilgi" }),
  P("נידו צ'יפס", "needoh", 24.9, { emoji: "🍟",  source: "Gilgi" }),
  P("רביעיית נידו דאמפלינג במגש", "needoh", 64.9, { emoji: "🥟",  badge: "בלעדי", source: "Gilgi" }),
  P("נידו מיני דאמפלינג", "needoh", 18.9, { emoji: "🥟",  source: "Gilgi" }),
  P("נידו מיני משולש גבינה", "needoh", 18.9, { emoji: "🧀",  source: "Gilgi" }),
  P("נידו דאמפלינג בסיר אידוי", "needoh", 38.9, { emoji: "🥟",  source: "Gilgi" }),
  P("נידו כדור שייש", "needoh", 26.9, { emoji: "⚪",  source: "Gilgi" }),
  P("נידו ראש קפיברה חמוד", "needoh", 20.0, { emoji: "🦫",  source: "Sindya" }),
  P("נידו דובי", "needoh", 20.0, { emoji: "🧸",  source: "Sindya" }),

  // ---------- מוציא עיניים ----------
  P("ארנב נידו עיניים בולטות", "eyepop", 15.9, { emoji: "🐰",  badge: "רב מכר", source: "Pinky Fidgets" }),
  P("ביצת נידו קטנה פרצוף", "eyepop", 6.9, { emoji: "🥚",  source: "Pinky Fidgets" }),
  P("צפרדע מוציא עיניים", "eyepop", 14.9, { emoji: "🐸",  desc: "לחיצה והעיניים קופצות החוצה" }),
  P("חתול מוציא עיניים", "eyepop", 14.9, { emoji: "🐱", }),

  // ---------- סקווישי חול ----------
  P("כדור חול קינטי לחיץ", "sand", 16.9, { emoji: "🏖️",  desc: "מרקם חולי שנמס בין האצבעות" }),
  P("לב חול קינטי", "sand", 17.9, { emoji: "💗", }),
  P("כוכב חול קינטי", "sand", 17.9, { emoji: "⭐", }),

  // ---------- סקווישי מים ----------
  P("אנגרי בירדס מים", "water", 7.0, { emoji: "🐦",  source: "Pinky Fidgets" }),
  P("עכבר מים", "water", 7.0, { emoji: "🐭",  source: "Pinky Fidgets" }),
  P("תפוז מים", "water", 7.0, { emoji: "🍊",  source: "Pinky Fidgets" }),
  P("דאמפלינג קרח-מים מנצנץ", "water", 28.9, { emoji: "🥟",  badge: "רב מכר", source: "Gilgi" }),
  P("ענב מים", "water", 7.0, { emoji: "🍇", }),

  // ---------- ספוג / חמאה ----------
  P("ספוג חמאה זהב", "butter", 19.9, { emoji: "🧈",  badge: "רב מכר", source: "Pinky Fidgets" }),
  P("ספוג חמאה ארצות הברית", "butter", 19.9, { emoji: "🧈",  source: "Pinky Fidgets" }),
  P("ספוג חמאה אנגליה", "butter", 19.9, { emoji: "🧈",  source: "Pinky Fidgets" }),
  P("ספוג חמאה לבנה", "butter", 19.9, { emoji: "🧈",  source: "Pinky Fidgets" }),
  P("ספוג חמאה צהובה", "butter", 19.9, { emoji: "🧈",  source: "Pinky Fidgets" }),
  P("ספוג חמאה צבעונית", "butter", 19.9, { emoji: "🧈",  source: "Pinky Fidgets" }),
  P("קוביית חמאה אנגלית", "butter", 24.9, { emoji: "🧈",  source: "Gilgi" }),
  P("חמאה ורודה ענקית", "butter", 44.9, { emoji: "🧈",  badge: "ענק", source: "Gilgi" }),
  P("חמאה צבעונית ענקית", "butter", 44.9, { emoji: "🧈",  source: "Gilgi" }),
  P("חמאה צהובה ענקית", "butter", 44.9, { emoji: "🧈",  source: "Gilgi" }),
  P("חמאה ענק 23 ס\"מ", "butter", 40.0, { emoji: "🧈",  source: "Sindya" }),
  P("מקל חמאה", "butter", 22.0, { emoji: "🧈",  source: "Sindya" }),

  // ---------- אוכל וחטיפים ----------
  P("המבורגר נידו", "food", 28.9, { emoji: "🍔",  source: "Gilgi" }),
  P("נידו מיני קלח תירס", "food", 16.9, { emoji: "🌽",  source: "Gilgi" }),
  P("ג'ורדן נעל נידו", "food", 20.9, { emoji: "👟",  source: "Pinky Fidgets" }),
  P("נידו נעל נייק", "food", 24.9, { emoji: "👟",  source: "Gilgi" }),
  P("נאגטס ענק נידו", "food", 45.0, { emoji: "🍗",  badge: "מלאי מוגבל", source: "Sindya" }),
  P("פרייד צ'יקן ענק נידו", "food", 52.9, { emoji: "🍗",  badge: "מלאי מוגבל", source: "Gilgi" }),
  P("נידו אדממה", "food", 19.9, { emoji: "🫛",  source: "Gilgi" }),
  P("משולש גבינה צהובה", "food", 15.0, { emoji: "🧀",  source: "Sindya" }),

  // ---------- פירות וירקות ----------
  P("אבטיח מצחיק נידו", "fruit", 18.9, { emoji: "🍉",  source: "Pinky Fidgets" }),
  P("נידו מיני אננס", "fruit", 16.9, { emoji: "🍍",  source: "Gilgi" }),
  P("נידו עגבניית שרי", "fruit", 14.9, { emoji: "🍅",  source: "Gilgi" }),
  P("נידו מנגו פרימיום", "fruit", 29.9, { emoji: "🥭",  badge: "פרימיום", source: "Gilgi" }),
  P("נידו גזר יפני צהוב ענקי", "fruit", 45.0, { emoji: "🥕",  badge: "ענק", source: "Gilgi" }),
  P("מנגו לחיץ", "fruit", 15.0, { emoji: "🥭",  source: "Sindya" }),
  P("אבטיח גדול אורביז", "fruit", 15.0, { emoji: "🍉",  source: "Sindya" }),
  P("נידו גזר ענק מחליף צבע", "fruit", 45.0, { emoji: "🥕",  badge: "ענק", source: "Sindya" }),
  P("אבטיח ענק נידו", "fruit", 45.0, { emoji: "🍉",  badge: "ענק", source: "Sindya" }),
  P("זוג לימונים פרצופים", "fruit", 15.0, { emoji: "🍋",  source: "Sindya" }),

  // ---------- בעלי חיים ----------
  P("נידו קפיברה ענק", "animals", 54.9, { emoji: "🦫",  badge: "רב מכר", source: "Gilgi" }),
  P("נידו כריש ענק", "animals", 49.9, { emoji: "🦈",  source: "Gilgi" }),
  P("נידו אווז בר ענקי", "animals", 46.9, { emoji: "🦢",  source: "Gilgi" }),
  P("נידו פנדה ביישנית", "animals", 24.9, { emoji: "🐼",  source: "Gilgi" }),
  P("נידו קפיברה גדול פרימיום", "animals", 42.9, { emoji: "🦫",  badge: "פרימיום", source: "Gilgi" }),
  P("קפיברה דביקה", "animals", 15.0, { emoji: "🦫",  source: "Sindya" }),
  P("ארנב גלידה בגביע", "animals", 20.0, { emoji: "🐰",  source: "Sindya" }),
  P("דובון לחיץ", "animals", 15.0, { emoji: "🧸",  source: "Sindya" }),

  // ---------- דמויות וגיבורים ----------
  P("סטיץ' נידו גדול", "chars", 18.9, { emoji: "💙",  badge: "רב מכר", source: "Pinky Fidgets" }),
  P("פטריק סטאר בוב ספוג", "chars", 15.0, { emoji: "⭐",  source: "Sindya" }),
  P("דמויות אגי פארטי", "chars", 15.0, { emoji: "🥚",  source: "Sindya" }),
  P("חד קרן אורות מהבהבים", "chars", 15.0, { emoji: "🦄",  source: "Sindya" }),
  P("בובת חד קרן", "chars", 15.0, { emoji: "🦄",  source: "Sindya" }),

  // ---------- דביק / הזרקה ----------
  P("פופ אפ תות דובי ורוד", "sticky", 12.9, { emoji: "🍓",  source: "Pinky Fidgets" }),
  P("כדור אורביז גדול דביק", "sticky", 20.0, { emoji: "🔵",  source: "Sindya" }),
  P("כדור ספלאט גלגל עין", "sticky", 15.0, { emoji: "💥",  source: "Sindya" }),

  // ---------- ארטיק וקינוחים ----------
  P("ארטיק צבעוני דביק", "dessert", 20.0, { emoji: "🍦",  source: "Sindya" }),
  P("חפיסת שוקולד", "dessert", 25.0, { emoji: "🍫",  source: "Sindya" }),
  P("שוקולד רובי ורוד", "dessert", 26.9, { emoji: "🍫",  source: "Gilgi" }),

  // ---------- קוואי ----------
  P("חתול קוואי", "kawaii", 15.0, { emoji: "🐱",  source: "Sindya" }),
  P("נידו מיני לב קטן קוואי", "kawaii", 12.9, { emoji: "💗",  source: "Gilgi" }),

  // ---------- פופ-אפ ופידג'ט ----------
  P("קקי מחייך לחיץ", "popup", 15.0, { emoji: "💩",  source: "Sindya" }),
  P("פופ אפ דובי תות", "popup", 13.9, { emoji: "🍓", }),

  // ---------- מיני ----------
  P("נידו מיני תות שדה", "mini", 13.9, { emoji: "🍓",  source: "Gilgi" }),
  P("נידו מיני ביצה", "mini", 11.9, { emoji: "🥚",  source: "Gilgi" }),
  P("ביצת נידו קטנה", "mini", 6.9, { emoji: "🥚",  source: "Pinky Fidgets" }),

  // ---------- ענק ופרימיום ----------
  P("נידו בוטן ענק פרימיום", "giant", 59.9, { emoji: "🥜",  badge: "פרימיום", source: "Gilgi" }),
  P("קופסת הפתעה ענקית", "giant", 100.0, { emoji: "🎁",  badge: "בלעדי", source: "Pinky Fidgets" }),
  P("שקית הפתעות גדולה", "giant", 60.0, { emoji: "🎁",  badge: "בלעדי", source: "Gilgi" }),
];

/* החלת זמני אספקה: 6 דגמים נבחרים במשלוח מהיר (4 ימי עסקים) */
const FAST_IDS = ["sq-001", "sq-026", "sq-022", "sq-055", "sq-070", "sq-079"];
PRODUCTS.forEach(p => { if (FAST_IDS.includes(p.id)) p.fast = true; });

/* פונקציות עזר גלובליות */
function shipText(p) { return p.fast ? SHIP_FAST : SHIP_STD; }
function catById(id) { return CATEGORIES.find(c => c.id === id); }
function productsByCat(id) { return PRODUCTS.filter(p => p.cat === id); }
function productById(id) { return PRODUCTS.find(p => p.id === id); }

if (typeof window !== "undefined") {
  window.AMY = { CATEGORIES, PRODUCTS, SHIP_STD, SHIP_FAST, ANGLES, shipText, catById, productsByCat, productById };
}
