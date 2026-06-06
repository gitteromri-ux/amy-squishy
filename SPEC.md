# AMY SQUISHY — Build Spec (Hebrew-only Israeli e-commerce)

CRITICAL RULES:
- ALL text in HEBREW only. NO English words anywhere on the site (except brand-neutral things like ₪, emoji). Hebrew UI, Hebrew labels, Hebrew buttons.
- RTL layout (dir="rtl", lang="he").
- Ships to ALL of Israel only.
- Project dir: /home/user/workspace/amy-squishy
- Every page must include nav + footer via the mount pattern below.

## Shared assets already built (DO NOT recreate):
- `css/style.css` — full design system. Use its classes & CSS variables.
- `js/products.js` — catalog of 82 products in 15 categories. Global `window.AMY` with:
  CATEGORIES[], PRODUCTS[], SHIP_STD ("14-21 ימי עסקים"), SHIP_FAST ("4 ימי עסקים"),
  ANGLES[], shipText(p), catById(id), productsByCat(id), productById(id).
  Product fields: {id,name,cat,price,fast,badge,source,desc,img}
- `js/app.js` — global `window.AmyApp` with:
  prodCard(p)->HTML string, mountChrome(activePage), initReveal(), addToCart(id),
  removeFromCart(id), setQty(id,qty), getCart(), saveCart(c), cartTotal(), cartCount(), toast(msg), LOGO (svg string).
- `js/whatsapp.js` — WhatsApp bot widget (auto-mounts via #wa-mount). Include `<div id="wa-mount"></div>` before scripts.
- `assets/img/amy-mascot.png` — Amy character (transparent-ish pink bg).
- `assets/img/hero-bg.png` — hero background.

## Required <head> for every page:
```html
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>... · איימי סקווישי</title>
<meta name="description" content="...">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700;800&family=Heebo:wght@400;500;700;800;900&family=Pacifico&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
```

## Required body skeleton:
```html
<div id="nav-mount"></div>
... page content ...
<div id="footer-mount"></div>
<div id="wa-mount"></div>
<script src="js/products.js"></script>
<script src="js/app.js"></script>
<script src="js/whatsapp.js"></script>
<script> AmyApp.mountChrome("PAGE_ID"); /* page logic */ AmyApp.initReveal(); </script>
```
PAGE_IDs: home, shop, blog, track, about (matches nav).

## Palette (CSS vars): --pink #F7B5C4, --pink-deep #E8889E, --sky #BFE3F0, --sky-deep #7FC4DD, --ink #1A1518, --white, --pink-tint #FFF5F8, --cream.
## Fonts: --font-display (Heebo), --font-body (Assistant), --font-script (Pacifico for accents only — but Pacifico is Latin; use Hebrew text in Heebo/Assistant. For script-feel Hebrew, use Heebo 900 italic-ish styling, NOT Pacifico for Hebrew words).
   NOTE: Pacifico does NOT support Hebrew. For any Hebrew "script" accent, use Heebo weight 900 with color var(--pink-deep). Only use Pacifico for non-Hebrew decorative bits if any (avoid).
## Design bar: award-winning, interactive, premium. Generous whitespace, smooth hover, scroll reveal (.reveal class), rounded corners, soft shadows.

## Nav links (already in app.js): בית, חנות, בלוג, מעקב משלוח, הסיפור שלנו. Cart at cart.html.

Pages to build:
- shop.html (catalog with category tabs)
- product.html (single product, reads ?id=)
- cart.html + checkout (demo)
- track.html (customer portal, Apple-design, login demo)
- blog.html + 6 articles
- about.html (Amy story)
- terms.html (תקנון)
