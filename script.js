/* ══════════════════════════════════════════
   AURELIA — Luxury Jewellery JavaScript
══════════════════════════════════════════ */

/* ─── PRODUCT DATA ──────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Eternal Solitaire Ring",
    category: "rings",
    description: "A breathtaking 0.75ct round brilliant diamond set in 18K white gold with a micro-pavé band.",
    fullDesc: "The Eternal Solitaire Ring is our flagship piece — a masterwork of precision and beauty. Featuring a round brilliant diamond of exceptional clarity, it is set in our signature 6-prong crown crafted from 18K white gold. The micro-pavé band adds 0.15ct of additional sparkle, making this the ultimate symbol of eternal love.",
    price: 185000,
    originalPrice: 245000,
    discount: 24,
    rating: 5,
    reviews: 128,
    badge: "hot",
    badgeText: "HOT",
    material: "18K White Gold",
    weight: "4.2g",
    purity: "75% Gold (750)",
    sizes: ["5", "6", "7", "8", "9"],
    svgKey: "ring_diamond",
  },
  {
    id: 2,
    name: "Celestial Gold Necklace",
    category: "necklaces",
    description: "Hand-crafted 22K gold necklace with intricate filigree work and natural emerald pendant.",
    fullDesc: "The Celestial Gold Necklace is inspired by the star-studded Rajasthani night sky. Each link is hand-crafted by our master goldsmiths using 22K yellow gold. The centrepiece features a natural Zambian emerald in a traditional kundan setting, creating a jewel that bridges heritage and haute couture.",
    price: 98500,
    originalPrice: 125000,
    discount: 21,
    rating: 5,
    reviews: 94,
    badge: "new",
    badgeText: "NEW",
    material: "22K Yellow Gold",
    weight: "18.6g",
    purity: "91.6% Gold (916)",
    sizes: ["16 inch", "18 inch", "20 inch"],
    svgKey: "necklace_emerald",
  },
  {
    id: 3,
    name: "Royal Bridal Set",
    category: "bridal",
    description: "Complete 22K gold bridal set featuring necklace, maang tikka, earrings, and bangles.",
    fullDesc: "The Royal Bridal Set is AURELIA's most celebrated creation. Comprising a statement necklace, matching jhumka earrings, maang tikka, and a pair of gold bangles — all in 22K yellow gold adorned with kundan work and polki diamonds. A complete ensemble fit for the most auspicious day of your life.",
    price: 485000,
    originalPrice: 580000,
    discount: 16,
    rating: 5,
    reviews: 216,
    badge: "hot",
    badgeText: "BRIDAL",
    material: "22K Yellow Gold + Polki",
    weight: "68.4g",
    purity: "91.6% Gold (916)",
    sizes: ["Standard", "Custom"],
    svgKey: "bridal_set",
  },
  {
    id: 4,
    name: "Radiant Pearl Earrings",
    category: "earrings",
    description: "South Sea pearl drop earrings with 18K rose gold settings and diamond halo accents.",
    fullDesc: "Our Radiant Pearl Earrings feature rare South Sea pearls of AAA grade, measuring 10–11mm, suspended elegantly from 18K rose gold settings. Each pearl is surrounded by a delicate halo of 0.12ct pavé diamonds, adding brilliance to nature's most perfect gem. The lever-back closure ensures secure, comfortable all-day wear.",
    price: 52000,
    originalPrice: 67500,
    discount: 23,
    rating: 4,
    reviews: 73,
    badge: "new",
    badgeText: "NEW",
    material: "18K Rose Gold + South Sea Pearl",
    weight: "6.8g",
    purity: "75% Gold (750)",
    sizes: ["Standard"],
    svgKey: "earrings_pearl",
  },
  {
    id: 5,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    description: "Timeless 18K white gold bracelet set with 3.5ct of F-VS diamonds in a classic prong setting.",
    fullDesc: "The Diamond Tennis Bracelet is the epitome of understated luxury. Set with 45 round brilliant diamonds totalling 3.5ct (F colour, VS1 clarity) in a classic 4-prong white gold setting, this bracelet catches the light from every angle. The double-safety box clasp ensures it stays where it belongs — on your wrist.",
    price: 295000,
    originalPrice: 365000,
    discount: 19,
    rating: 5,
    reviews: 88,
    badge: "sale",
    badgeText: "SALE",
    material: "18K White Gold",
    weight: "12.3g",
    purity: "75% Gold (750)",
    sizes: ["6.5 inch", "7 inch", "7.5 inch"],
    svgKey: "bracelet_diamond",
  },
  {
    id: 6,
    name: "Luxury Gold Watch",
    category: "luxury",
    description: "18K gold case mechanical watch with sapphire crystal, crocodile strap, and 50 hr power reserve.",
    fullDesc: "The AURELIA Timepiece is where the jeweller's art meets horological precision. The 40mm case in 18K yellow gold houses a Swiss-made mechanical movement visible through the sapphire exhibition caseback. Diamond-set hour markers (0.8ct total) and a hand-stitched crocodile leather strap complete this extraordinary wrist companion.",
    price: 875000,
    originalPrice: 1050000,
    discount: 17,
    rating: 5,
    reviews: 41,
    badge: "hot",
    badgeText: "LUXURY",
    material: "18K Gold + Sapphire Crystal",
    weight: "95g",
    purity: "75% Gold (750)",
    sizes: ["40mm"],
    svgKey: "watch_gold",
  },
  {
    id: 7,
    name: "Emerald Cut Diamond Ring",
    category: "rings",
    description: "1.2ct emerald-cut diamond in a platinum four-claw setting with baguette side stones.",
    fullDesc: "A study in geometric perfection, the Emerald Cut Diamond Ring showcases a 1.2ct G-VVS2 emerald-cut diamond flanked by two baguette diamonds (0.25ct total) in a sleek four-claw platinum setting. The long, open facets of the emerald cut reveal diamond's natural clarity like no other shape — a true connoisseur's choice.",
    price: 320000,
    originalPrice: 395000,
    discount: 19,
    rating: 5,
    reviews: 56,
    badge: "new",
    badgeText: "NEW",
    material: "Platinum 950",
    weight: "5.8g",
    purity: "95% Platinum",
    sizes: ["5", "6", "7", "8"],
    svgKey: "ring_emerald_cut",
  },
  {
    id: 8,
    name: "Jadau Kundan Necklace",
    category: "necklaces",
    description: "Traditional Rajasthani jadau work necklace in 22K gold with uncut polki diamonds and ruby accents.",
    fullDesc: "The Jadau Kundan Necklace is a celebration of Rajasthani heritage. Crafted using the ancient jadau technique, uncut polki diamonds are set directly into a base of pure 24K gold foil encased in a 22K framework. Ruby and emerald cabochons add vivid colour to this heirloom masterpiece that takes over 240 hours to complete.",
    price: 235000,
    originalPrice: 290000,
    discount: 19,
    rating: 5,
    reviews: 103,
    badge: "hot",
    badgeText: "HOT",
    material: "22K Gold + Polki + Ruby",
    weight: "42.6g",
    purity: "91.6% Gold (916)",
    sizes: ["14 inch", "16 inch", "18 inch"],
    svgKey: "necklace_kundan",
  },
  {
    id: 9,
    name: "Gold Mangalsutra",
    category: "bridal",
    description: "Contemporary 22K gold mangalsutra with black bead chain and diamond-studded pendant.",
    fullDesc: "The AURELIA Mangalsutra reimagines this sacred tradition for the modern bride. The black bead and 22K gold chain supports a contemporary diamond-studded pendant (0.45ct total) in 18K white gold. Available in both traditional dual-strand and modern single-strand styles, it transitions effortlessly from wedding wear to everyday elegance.",
    price: 68500,
    originalPrice: 85000,
    discount: 19,
    rating: 5,
    reviews: 187,
    badge: "new",
    badgeText: "BRIDAL",
    material: "22K Gold + 18K White Gold",
    weight: "14.2g",
    purity: "91.6% Gold (916)",
    sizes: ["16 inch", "18 inch", "20 inch", "22 inch"],
    svgKey: "mangalsutra",
  },
  {
    id: 10,
    name: "Ruby & Diamond Earrings",
    category: "earrings",
    description: "Vibrant Burmese ruby and diamond cluster earrings in 18K yellow gold. 2.4ct total ruby weight.",
    fullDesc: "Our Ruby & Diamond Cluster Earrings are a passionate declaration of colour. Each earring centres a Burmese ruby of 1.2ct (pigeon-blood red, heat-treated) surrounded by a cluster of 0.28ct round brilliant diamonds in 18K yellow gold. The combination of warm gold, vivid red, and brilliant white is simply intoxicating.",
    price: 145000,
    originalPrice: 178000,
    discount: 19,
    rating: 4,
    reviews: 64,
    badge: "sale",
    badgeText: "SALE",
    material: "18K Yellow Gold + Burma Ruby",
    weight: "8.4g",
    purity: "75% Gold (750)",
    sizes: ["Standard"],
    svgKey: "earrings_ruby",
  },
  {
    id: 11,
    name: "Diamond Bangle Set",
    category: "bracelets",
    description: "Set of three 18K rose gold bangles with channel-set diamond rows — 1.8ct total weight.",
    fullDesc: "The Diamond Bangle Set comprises three stackable 18K rose gold bangles, each set with a channel of round brilliant diamonds. Worn individually for understated glamour or stacked together for a dramatic effect, the 1.8ct total diamond weight ensures maximum sparkle. The warm rose gold complements every skin tone beautifully.",
    price: 175000,
    originalPrice: 215000,
    discount: 19,
    rating: 5,
    reviews: 79,
    badge: "new",
    badgeText: "NEW",
    material: "18K Rose Gold",
    weight: "22.5g",
    purity: "75% Gold (750)",
    sizes: ["2.4 inch", "2.6 inch", "2.8 inch"],
    svgKey: "bangles_diamond",
  },
  {
    id: 12,
    name: "Diamond Rivière Necklace",
    category: "luxury",
    description: "Spectacular 5ct diamond rivière in platinum — 25 graduated F-VS1 diamonds, IGI certified.",
    fullDesc: "The Diamond Rivière Necklace is the crown jewel of our Luxury Collection. Twenty-five graduated F-VS1 round brilliant diamonds, totalling exactly 5.00 carats, are set in a seamless platinum collet necklace. Each diamond carries an IGI certificate. This is not jewellery — this is an investment in brilliance that will be treasured for generations.",
    price: 1250000,
    originalPrice: 1480000,
    discount: 16,
    rating: 5,
    reviews: 23,
    badge: "hot",
    badgeText: "LUXURY",
    material: "Platinum 950",
    weight: "22.8g",
    purity: "95% Platinum",
    sizes: ["16 inch", "18 inch"],
    svgKey: "necklace_riviere",
  },
];

/* ─── SVG ILLUSTRATIONS ─────────────────── */
const SVG_ICONS = {
  ring_diamond: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rd1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#f5e678"/><stop offset="50%" stop-color="#c9960c"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
      <radialGradient id="rd2" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="#e8f4ff"/><stop offset="100%" stop-color="#9ecfff"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="140" rx="55" ry="20" fill="url(#rd1)" opacity="0.8"/>
    <rect x="45" y="110" width="110" height="30" fill="url(#rd1)" rx="2"/>
    <ellipse cx="100" cy="110" rx="55" ry="20" fill="#f5e678"/>
    <ellipse cx="100" cy="100" rx="28" ry="13" fill="#c9960c"/>
    <polygon points="100,55 128,93 100,107 72,93" fill="url(#rd2)"/>
    <polygon points="100,55 114,74 100,80 86,74" fill="#fff" opacity="0.8"/>
    <polygon points="100,107 128,93 114,100" fill="#c8e8ff" opacity="0.7"/>
    <polygon points="100,107 72,93 86,100" fill="#9ecfff" opacity="0.6"/>
  </svg>`,

  necklace_emerald: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ne1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#f5e678"/><stop offset="50%" stop-color="#c9960c"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
      <radialGradient id="ne2" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8ffdc"/><stop offset="40%" stop-color="#00c96e"/><stop offset="100%" stop-color="#006636"/></radialGradient>
    </defs>
    <path d="M30,60 Q100,20 170,60" stroke="url(#ne1)" stroke-width="3.5" fill="none"/>
    <circle cx="45" cy="52" r="4.5" fill="url(#ne1)"/>
    <circle cx="65" cy="40" r="4.5" fill="url(#ne1)"/>
    <circle cx="85" cy="32" r="4.5" fill="url(#ne1)"/>
    <circle cx="100" cy="29" r="4.5" fill="url(#ne1)"/>
    <circle cx="115" cy="32" r="4.5" fill="url(#ne1)"/>
    <circle cx="135" cy="40" r="4.5" fill="url(#ne1)"/>
    <circle cx="155" cy="52" r="4.5" fill="url(#ne1)"/>
    <line x1="100" y1="29" x2="100" y2="80" stroke="url(#ne1)" stroke-width="2.5"/>
    <polygon points="100,80 122,112 100,145 78,112" fill="url(#ne2)"/>
    <polygon points="100,80 111,96 100,103 89,96" fill="#b8ffdc" opacity="0.8"/>
    <polygon points="100,80 122,112 114,98" fill="#00a058" opacity="0.4"/>
    <polygon points="100,145 122,112 112,128" fill="#007840" opacity="0.6"/>
    <polygon points="100,145 78,112 88,128" fill="#005a30" opacity="0.5"/>
    <polygon points="100,77 126,110 100,148 74,110" stroke="url(#ne1)" stroke-width="2.5" fill="none"/>
    <circle cx="100" cy="77" r="6" fill="url(#ne1)"/>
  </svg>`,

  bridal_set: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bs1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#fff0a0"/><stop offset="50%" stop-color="#e6b800"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
    </defs>
    <path d="M40,70 Q100,35 160,70" stroke="url(#bs1)" stroke-width="3" fill="none"/>
    <circle cx="100" cy="38" r="5" fill="url(#bs1)"/>
    <circle cx="130" cy="46" r="4" fill="url(#bs1)"/>
    <circle cx="70" cy="46" r="4" fill="url(#bs1)"/>
    <line x1="100" y1="43" x2="100" y2="80" stroke="url(#bs1)" stroke-width="2"/>
    <polygon points="100,80 118,104 100,124 82,104" fill="#e6b800" opacity="0.7"/>
    <polygon points="100,80 110,92 100,98 90,92" fill="#fff0a0" opacity="0.8"/>
    <polygon points="100,80 118,104 110,93" fill="#c9960c" opacity="0.5"/>
    <polygon points="100,124 118,104 110,114" fill="#c9960c" opacity="0.5"/>
    <circle cx="60" cy="148" r="12" fill="none" stroke="url(#bs1)" stroke-width="2.5"/>
    <circle cx="60" cy="148" r="6" fill="url(#bs1)" opacity="0.5"/>
    <line x1="60" y1="136" x2="60" y2="148" stroke="url(#bs1)" stroke-width="2"/>
    <circle cx="140" cy="148" r="12" fill="none" stroke="url(#bs1)" stroke-width="2.5"/>
    <circle cx="140" cy="148" r="6" fill="url(#bs1)" opacity="0.5"/>
    <line x1="140" y1="136" x2="140" y2="148" stroke="url(#bs1)" stroke-width="2"/>
    <ellipse cx="100" cy="170" rx="30" ry="10" fill="none" stroke="url(#bs1)" stroke-width="2"/>
    <ellipse cx="100" cy="162" rx="30" ry="10" fill="none" stroke="url(#bs1)" stroke-width="2"/>
  </svg>`,

  earrings_pearl: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ep1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#f7c5b0"/><stop offset="50%" stop-color="#d4856a"/><stop offset="100%" stop-color="#8b4a35"/></radialGradient>
      <radialGradient id="pearl" cx="35%" cy="25%" r="65%"><stop offset="0%" stop-color="#fffaf8"/><stop offset="40%" stop-color="#f5e0d8"/><stop offset="100%" stop-color="#d4b0a0"/></radialGradient>
    </defs>
    <circle cx="68" cy="38" r="8" fill="url(#ep1)"/>
    <line x1="68" y1="46" x2="68" y2="68" stroke="url(#ep1)" stroke-width="2.5"/>
    <circle cx="68" cy="68" r="4" fill="url(#ep1)"/>
    <circle cx="68" cy="68" r="8" fill="none" stroke="url(#ep1)" stroke-width="1.2" opacity="0.6"/>
    <ellipse cx="68" cy="110" rx="18" ry="22" fill="url(#pearl)"/>
    <ellipse cx="62" cy="104" rx="7" ry="5" fill="white" opacity="0.4"/>
    <circle cx="132" cy="38" r="8" fill="url(#ep1)"/>
    <line x1="132" y1="46" x2="132" y2="68" stroke="url(#ep1)" stroke-width="2.5"/>
    <circle cx="132" cy="68" r="4" fill="url(#ep1)"/>
    <circle cx="132" cy="68" r="8" fill="none" stroke="url(#ep1)" stroke-width="1.2" opacity="0.6"/>
    <ellipse cx="132" cy="110" rx="18" ry="22" fill="url(#pearl)"/>
    <ellipse cx="126" cy="104" rx="7" ry="5" fill="white" opacity="0.4"/>
  </svg>`,

  bracelet_diamond: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bd1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f5f5ff"/><stop offset="50%" stop-color="#c8d8ff"/><stop offset="100%" stop-color="#8090c0"/></linearGradient>
    </defs>
    <ellipse cx="100" cy="115" rx="66" ry="24" fill="url(#bd1)" opacity="0.2" stroke="url(#bd1)" stroke-width="1"/>
    <ellipse cx="100" cy="100" rx="66" ry="24" fill="url(#bd1)" opacity="0.3" stroke="url(#bd1)" stroke-width="2.5"/>
    <line x1="34" y1="100" x2="34" y2="115" stroke="url(#bd1)" stroke-width="2.5"/>
    <line x1="166" y1="100" x2="166" y2="115" stroke="url(#bd1)" stroke-width="2.5"/>
    <circle cx="100" cy="100" r="5" fill="white" opacity="0.9"/>
    <circle cx="126" cy="96" r="3.5" fill="white" opacity="0.7"/>
    <circle cx="74" cy="96" r="3.5" fill="white" opacity="0.7"/>
    <circle cx="148" cy="102" r="3" fill="white" opacity="0.5"/>
    <circle cx="52" cy="102" r="3" fill="white" opacity="0.5"/>
    <circle cx="155" cy="110" r="2.5" fill="white" opacity="0.4"/>
    <circle cx="45" cy="110" r="2.5" fill="white" opacity="0.4"/>
  </svg>`,

  watch_gold: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wg1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#fff0a0"/><stop offset="50%" stop-color="#e6b800"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
    </defs>
    <rect x="82" y="20" width="36" height="30" rx="4" fill="url(#wg1)"/>
    <rect x="82" y="150" width="36" height="30" rx="4" fill="url(#wg1)"/>
    <circle cx="100" cy="100" r="58" fill="url(#wg1)" opacity="0.9"/>
    <circle cx="100" cy="100" r="50" fill="#1a1000" stroke="url(#wg1)" stroke-width="1"/>
    <circle cx="100" cy="100" r="42" fill="none" stroke="#c9960c" stroke-width="0.5" opacity="0.4"/>
    <line x1="100" y1="100" x2="100" y2="68" stroke="url(#wg1)" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="120" y2="108" stroke="url(#wg1)" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="3" fill="url(#wg1)"/>
    <circle cx="100" cy="62" r="2.5" fill="#c9960c" opacity="0.6"/>
    <circle cx="138" cy="100" r="2.5" fill="#c9960c" opacity="0.6"/>
    <circle cx="100" cy="138" r="2.5" fill="#c9960c" opacity="0.6"/>
    <circle cx="62" cy="100" r="2.5" fill="#c9960c" opacity="0.6"/>
  </svg>`,

  ring_emerald_cut: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pl1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0f0ff"/><stop offset="50%" stop-color="#c0c8e8"/><stop offset="100%" stop-color="#7080a0"/></linearGradient>
      <radialGradient id="ec1" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="#f0f8ff"/><stop offset="100%" stop-color="#a0c0e0"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="140" rx="55" ry="20" fill="url(#pl1)" opacity="0.7"/>
    <rect x="45" y="112" width="110" height="28" fill="url(#pl1)" rx="2"/>
    <ellipse cx="100" cy="112" rx="55" ry="20" fill="#e0e8f8"/>
    <ellipse cx="100" cy="102" rx="28" ry="12" fill="#a0b8d8"/>
    <rect x="72" y="62" width="56" height="40" rx="3" fill="url(#ec1)"/>
    <rect x="76" y="66" width="48" height="32" rx="2" fill="none" stroke="white" stroke-width="0.8" opacity="0.6"/>
    <line x1="72" y1="82" x2="128" y2="82" stroke="white" stroke-width="0.6" opacity="0.5"/>
    <line x1="90" y1="62" x2="90" y2="102" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="110" y1="62" x2="110" y2="102" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <polygon points="72,70 78,66 72,66" fill="white" opacity="0.7"/>
    <polygon points="128,70 122,66 128,66" fill="white" opacity="0.7"/>
    <polygon points="72,94 78,102 72,102" fill="#a0c0e0" opacity="0.7"/>
    <polygon points="128,94 122,102 128,102" fill="#a0c0e0" opacity="0.7"/>
  </svg>`,

  necklace_kundan: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="kd1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#fff0a0"/><stop offset="50%" stop-color="#e6b800"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
      <radialGradient id="kd2" cx="40%" cy="25%" r="70%"><stop offset="0%" stop-color="#ffb8c0"/><stop offset="50%" stop-color="#e0002a"/><stop offset="100%" stop-color="#700016"/></radialGradient>
    </defs>
    <path d="M25,55 Q100,18 175,55" stroke="url(#kd1)" stroke-width="4" fill="none"/>
    <circle cx="100" cy="22" r="6" fill="url(#kd1)"/>
    <circle cx="60" cy="34" r="5" fill="url(#kd1)"/>
    <circle cx="140" cy="34" r="5" fill="url(#kd1)"/>
    <circle cx="100" cy="22" r="3" fill="url(#kd2)"/>
    <circle cx="60" cy="34" r="2.5" fill="url(#kd2)"/>
    <circle cx="140" cy="34" r="2.5" fill="url(#kd2)"/>
    <line x1="100" y1="28" x2="100" y2="70" stroke="url(#kd1)" stroke-width="2"/>
    <polygon points="100,70 80,90 66,115 80,140 100,155 120,140 134,115 120,90" fill="none" stroke="url(#kd1)" stroke-width="2.5"/>
    <polygon points="100,80 116,98 108,118 100,130 92,118 84,98" fill="url(#kd1)" opacity="0.3"/>
    <circle cx="100" cy="100" r="12" fill="url(#kd2)"/>
    <circle cx="100" cy="100" r="8" fill="none" stroke="url(#kd1)" stroke-width="1.5"/>
    <circle cx="80" cy="115" r="6" fill="url(#kd2)"/>
    <circle cx="120" cy="115" r="6" fill="url(#kd2)"/>
    <circle cx="86" cy="90" r="4" fill="url(#kd2)"/>
    <circle cx="114" cy="90" r="4" fill="url(#kd2)"/>
  </svg>`,

  mangalsutra: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ms1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#f5e678"/><stop offset="50%" stop-color="#c9960c"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
    </defs>
    <path d="M50,40 Q100,20 150,40 Q160,70 150,90 Q130,100 100,105 Q70,100 50,90 Q40,70 50,40" stroke="url(#ms1)" stroke-width="2.5" fill="none"/>
    <circle cx="100" cy="22" r="3" fill="black"/>
    <circle cx="86" cy="25" r="3" fill="black"/>
    <circle cx="114" cy="25" r="3" fill="black"/>
    <circle cx="72" cy="32" r="3" fill="black"/>
    <circle cx="128" cy="32" r="3" fill="black"/>
    <circle cx="62" cy="42" r="3" fill="black"/>
    <circle cx="138" cy="42" r="3" fill="black"/>
    <line x1="100" y1="105" x2="100" y2="130" stroke="url(#ms1)" stroke-width="2"/>
    <polygon points="100,130 118,152 100,168 82,152" fill="none" stroke="url(#ms1)" stroke-width="2"/>
    <polygon points="100,130 110,144 100,151 90,144" fill="url(#ms1)" opacity="0.5"/>
    <circle cx="100" cy="149" r="6" fill="url(#ms1)" opacity="0.4"/>
    <polygon points="100,130 118,152 110,143" fill="#c9960c" opacity="0.3"/>
  </svg>`,

  earrings_ruby: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="er1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#fff0a0"/><stop offset="50%" stop-color="#e6b800"/><stop offset="100%" stop-color="#7a5900"/></radialGradient>
      <radialGradient id="er2" cx="40%" cy="25%" r="70%"><stop offset="0%" stop-color="#ffb8c0"/><stop offset="40%" stop-color="#e0002a"/><stop offset="100%" stop-color="#700016"/></radialGradient>
    </defs>
    <circle cx="68" cy="38" r="8" fill="url(#er1)"/>
    <line x1="68" y1="46" x2="68" y2="62" stroke="url(#er1)" stroke-width="2.5"/>
    <circle cx="68" cy="80" r="24" fill="url(#er2)"/>
    <circle cx="68" cy="80" r="18" fill="none" stroke="url(#er1)" stroke-width="1.8"/>
    <circle cx="60" cy="72" r="8" fill="#ffb8c0" opacity="0.5"/>
    <circle cx="60" cy="72" r="4" fill="white" opacity="0.5"/>
    <circle cx="132" cy="38" r="8" fill="url(#er1)"/>
    <line x1="132" y1="46" x2="132" y2="62" stroke="url(#er1)" stroke-width="2.5"/>
    <circle cx="132" cy="80" r="24" fill="url(#er2)"/>
    <circle cx="132" cy="80" r="18" fill="none" stroke="url(#er1)" stroke-width="1.8"/>
    <circle cx="124" cy="72" r="8" fill="#ffb8c0" opacity="0.5"/>
    <circle cx="124" cy="72" r="4" fill="white" opacity="0.5"/>
  </svg>`,

  bangles_diamond: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#f7c5b0"/><stop offset="50%" stop-color="#d4856a"/><stop offset="100%" stop-color="#8b4a35"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="85" rx="60" ry="22" fill="none" stroke="url(#bg1)" stroke-width="7"/>
    <circle cx="100" cy="63" r="4" fill="white" opacity="0.9"/>
    <circle cx="128" cy="70" r="3" fill="white" opacity="0.7"/>
    <circle cx="72" cy="70" r="3" fill="white" opacity="0.7"/>
    <ellipse cx="100" cy="100" rx="60" ry="22" fill="none" stroke="#e6b800" stroke-width="7"/>
    <circle cx="100" cy="78" r="4" fill="white" opacity="0.8"/>
    <circle cx="128" cy="85" r="3" fill="white" opacity="0.6"/>
    <circle cx="72" cy="85" r="3" fill="white" opacity="0.6"/>
    <ellipse cx="100" cy="115" rx="60" ry="22" fill="none" stroke="url(#bg1)" stroke-width="7" opacity="0.7"/>
    <circle cx="100" cy="93" r="4" fill="white" opacity="0.7"/>
    <circle cx="128" cy="100" r="3" fill="white" opacity="0.5"/>
    <circle cx="72" cy="100" r="3" fill="white" opacity="0.5"/>
  </svg>`,

  necklace_riviere: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="nr1" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="30%" stop-color="#f0f8ff"/><stop offset="100%" stop-color="#90b0d0"/></radialGradient>
      <linearGradient id="plat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e8ecf0"/><stop offset="50%" stop-color="#a8b8c8"/><stop offset="100%" stop-color="#6878a0"/></linearGradient>
    </defs>
    <path d="M28,65 Q100,28 172,65" stroke="url(#plat)" stroke-width="3" fill="none"/>
    <circle cx="100" cy="32" r="9" fill="url(#nr1)"/>
    <circle cx="100" cy="32" r="5" fill="white" opacity="0.6"/>
    <circle cx="80" cy="38" r="7" fill="url(#nr1)"/>
    <circle cx="80" cy="38" r="4" fill="white" opacity="0.5"/>
    <circle cx="120" cy="38" r="7" fill="url(#nr1)"/>
    <circle cx="120" cy="38" r="4" fill="white" opacity="0.5"/>
    <circle cx="60" cy="48" r="6" fill="url(#nr1)"/>
    <circle cx="140" cy="48" r="6" fill="url(#nr1)"/>
    <circle cx="42" cy="58" r="5" fill="url(#nr1)"/>
    <circle cx="158" cy="58" r="5" fill="url(#nr1)"/>
    <circle cx="28" cy="65" r="4" fill="url(#nr1)"/>
    <circle cx="172" cy="65" r="4" fill="url(#nr1)"/>
  </svg>`,
};

/* ─── GALLERY DATA ──────────────────────── */
const GALLERY_ITEMS = [
  { key: "ring_diamond",     label: "Solitaire Ring",     height: "tall" },
  { key: "necklace_emerald", label: "Emerald Necklace",   height: "short" },
  { key: "earrings_ruby",    label: "Ruby Earrings",      height: "short" },
  { key: "bridal_set",       label: "Bridal Set",         height: "tall" },
  { key: "watch_gold",       label: "Gold Watch",         height: "short" },
  { key: "necklace_kundan",  label: "Kundan Necklace",    height: "tall" },
  { key: "bracelet_diamond", label: "Diamond Bracelet",   height: "short" },
  { key: "mangalsutra",      label: "Mangalsutra",        height: "short" },
  { key: "ring_emerald_cut", label: "Emerald Cut Ring",   height: "short" },
  { key: "bangles_diamond",  label: "Diamond Bangles",    height: "tall" },
  { key: "earrings_pearl",   label: "Pearl Earrings",     height: "short" },
  { key: "necklace_riviere", label: "Diamond Rivière",    height: "short" },
];

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let cart = [];
let wishlist = [];
let currentHeroSlide = 0;
let heroInterval;
let testimonialIndex = 0;
let currentFilter = "all";
let lightboxIndex = 0;
let searchQuery = "";

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initNavbar();
  initHero();
  initProducts();
  initFilterBar();
  initCountdown();
  initTestimonials();
  initGallery();
  initLightbox();
  initCartSidebar();
  initSearch();
  initFadeIn();
  initRipple();
});

/* ─── LOADER ────────────────────────────── */
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "";
    }, 1800);
  });
  document.body.style.overflow = "hidden";
}

/* ─── THEME ─────────────────────────────── */
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("aureliaTheme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("aureliaTheme", next);
  });
}

/* ─── NAVBAR ────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Scroll behaviour
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
  });

  // Hamburger
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

function updateActiveLink() {
  const sections = ["hero", "categories", "products", "offers", "about", "contact"];
  let current = "hero";
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === current);
  });
}

/* ─── HERO SLIDESHOW ────────────────────── */
function initHero() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const prev = document.getElementById("heroPrev");
  const next = document.getElementById("heroNext");

  function goTo(n) {
    slides[currentHeroSlide].classList.remove("active");
    dots[currentHeroSlide].classList.remove("active");
    currentHeroSlide = (n + slides.length) % slides.length;
    slides[currentHeroSlide].classList.add("active");
    dots[currentHeroSlide].classList.add("active");
  }

  prev.addEventListener("click", () => { goTo(currentHeroSlide - 1); resetTimer(); });
  next.addEventListener("click", () => { goTo(currentHeroSlide + 1); resetTimer(); });
  dots.forEach(d => d.addEventListener("click", () => { goTo(+d.dataset.index); resetTimer(); }));

  function resetTimer() {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => goTo(currentHeroSlide + 1), 5000);
  }
  heroInterval = setInterval(() => goTo(currentHeroSlide + 1), 5000);
}

/* ─── PRODUCTS ──────────────────────────── */
function initProducts() {
  renderProducts(PRODUCTS);
}

function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-3);font-family:var(--ff-display);font-size:1.3rem;">No jewellery found matching your search.</div>`;
    return;
  }
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s" data-id="${p.id}" data-cat="${p.category}">
      <span class="product-badge badge-${p.badge}">${p.badgeText}</span>
      <button class="product-wish ${wishlist.includes(p.id) ? "active" : ""}" data-id="${p.id}" title="Wishlist">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <div class="product-img-wrap">
        ${SVG_ICONS[p.svgKey] || ""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-price">
          <span class="price-current">${formatINR(p.price)}</span>
          <span class="price-original">${formatINR(p.originalPrice)}</span>
          <span class="price-discount">${p.discount}% OFF</span>
        </div>
        <div class="product-rating">
          <span class="stars">${"★".repeat(p.rating)}${"☆".repeat(5-p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-actions">
          <button class="btn-gold ripple add-cart" data-id="${p.id}">Add to Cart</button>
          <button class="btn-view view-details" data-id="${p.id}">Details</button>
        </div>
      </div>
    </div>
  `).join("");

  // Bind events
  grid.querySelectorAll(".add-cart").forEach(btn => btn.addEventListener("click", e => {
    addToCart(+btn.dataset.id);
    rippleEffect(e);
  }));
  grid.querySelectorAll(".view-details").forEach(btn => btn.addEventListener("click", () => openModal(+btn.dataset.id)));
  grid.querySelectorAll(".product-wish").forEach(btn => btn.addEventListener("click", () => toggleWishlist(+btn.dataset.id)));

  // Re-observe for fade-in
  observeFadeIn();
}

/* ─── FILTER ────────────────────────────── */
function initFilterBar() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.cat;
      applyFilter();
    });
  });

  // Also hook category cards
  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.filter;
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      const matchBtn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
      if (matchBtn) matchBtn.classList.add("active");
      currentFilter = cat;
      applyFilter();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function applyFilter() {
  let filtered = PRODUCTS;
  if (currentFilter !== "all") filtered = filtered.filter(p => p.category === currentFilter);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  renderProducts(filtered);
}

/* ─── SEARCH ────────────────────────────── */
function initSearch() {
  const toggle = document.getElementById("searchToggle");
  const dropdown = document.getElementById("searchDropdown");
  const input = document.getElementById("searchInput");

  toggle.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
    if (dropdown.classList.contains("open")) input.focus();
  });

  document.addEventListener("click", e => {
    if (!dropdown.contains(e.target) && e.target !== toggle) dropdown.classList.remove("open");
  });

  input.addEventListener("input", () => {
    searchQuery = input.value.trim();
    applyFilter();
    if (searchQuery) document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
}

/* ─── CART ──────────────────────────────── */
function initCartSidebar() {
  const toggle = document.getElementById("cartToggle");
  const close = document.getElementById("closeCart");
  const overlay = document.getElementById("cartOverlay");

  toggle.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("show");
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  updateCartCount();
  showToast(`✦ ${product.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  updateCartCount();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
  updateCartCount();
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");
  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">◆</div>
        <p>Your cart is empty</p>
        <span>Add some luxury to your life</span>
      </div>`;
    footer.style.display = "none";
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <div class="cart-item-thumb">${SVG_ICONS[item.svgKey] || ""}</div>
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${formatINR(item.price)}</div>
        <div class="cart-item-qty">
          <button onclick="updateQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join("");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent = formatINR(total);
  footer.style.display = "block";
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  badge.textContent = total;
  badge.classList.toggle("show", total > 0);
}

/* ─── WISHLIST ──────────────────────────── */
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  const product = PRODUCTS.find(p => p.id === id);
  if (idx === -1) {
    wishlist.push(id);
    showToast(`♥ ${product?.name} added to wishlist`);
  } else {
    wishlist.splice(idx, 1);
    showToast(`${product?.name} removed from wishlist`);
  }
  // Update all wish buttons
  document.querySelectorAll(`.product-wish[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle("active", wishlist.includes(id));
    const svg = btn.querySelector("svg");
    if (svg) svg.style.fill = wishlist.includes(id) ? "#e55" : "none";
  });
  const badge = document.getElementById("wishlistCount");
  badge.textContent = wishlist.length;
  badge.classList.toggle("show", wishlist.length > 0);
}

/* ─── PRODUCT MODAL ─────────────────────── */
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="modal-img-area">
      ${SVG_ICONS[product.svgKey] || ""}
    </div>
    <div class="modal-info">
      <p class="modal-category">${product.category.toUpperCase()}</p>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-stars">${"★".repeat(product.rating)}${"☆".repeat(5-product.rating)} <span style="font-size:0.75rem;color:var(--text-3);margin-left:6px">(${product.reviews} reviews)</span></div>
      <p class="modal-desc">${product.fullDesc}</p>

      <div class="modal-specs">
        <div class="modal-spec-row"><span>Material</span><span>${product.material}</span></div>
        <div class="modal-spec-row"><span>Weight</span><span>${product.weight}</span></div>
        <div class="modal-spec-row"><span>Purity</span><span>${product.purity}</span></div>
        <div class="modal-spec-row"><span>Availability</span><span style="color:#4caf50">In Stock</span></div>
      </div>

      <div class="modal-price-area">
        <span class="modal-price-current">${formatINR(product.price)}</span>
        <span class="modal-price-original">${formatINR(product.originalPrice)}</span>
        <span class="modal-discount-tag">${product.discount}% OFF</span>
      </div>

      <div class="modal-sizes">
        <p>Available Sizes / Lengths</p>
        <div class="size-options">
          ${product.sizes.map((s, i) => `<button class="size-btn${i===0?" active":""}" onclick="selectSize(this)">${s}</button>`).join("")}
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-gold ripple" onclick="addToCart(${product.id});closeModal()">Buy Now</button>
        <button class="btn-outline" onclick="addToCart(${product.id});closeModal()">Add to Cart</button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
}

function selectSize(btn) {
  btn.closest(".size-options").querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("productModal").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});

/* ─── COUNTDOWN ─────────────────────────── */
function initCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 3);
  end.setHours(23, 59, 59, 0);

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, end - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("cdDays").textContent  = String(d).padStart(2, "0");
    document.getElementById("cdHours").textContent = String(h).padStart(2, "0");
    document.getElementById("cdMins").textContent  = String(m).padStart(2, "0");
    document.getElementById("cdSecs").textContent  = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ─── TESTIMONIALS ──────────────────────── */
function initTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const cards = track.querySelectorAll(".testimonial-card");
  const dotsWrap = document.getElementById("testDots");
  const prev = document.getElementById("testPrev");
  const next = document.getElementById("testNext");

  // Build dots
  cards.forEach((_, i) => {
    const d = document.createElement("span");
    d.classList.add("dot");
    if (i === 0) d.classList.add("active");
    d.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function getVisible() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1000) return 2;
    return 3;
  }

  function goTo(n) {
    const max = Math.max(0, cards.length - getVisible());
    testimonialIndex = Math.min(Math.max(n, 0), max);
    track.style.transform = `translateX(-${testimonialIndex * (340 + 24)}px)`;
    dotsWrap.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === testimonialIndex));
  }

  prev.addEventListener("click", () => goTo(testimonialIndex - 1));
  next.addEventListener("click", () => goTo(testimonialIndex + 1));

  // Auto advance
  setInterval(() => goTo(testimonialIndex + 1 > cards.length - getVisible() ? 0 : testimonialIndex + 1), 4500);
}

/* ─── GALLERY ───────────────────────────── */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const bgColors = [
    "linear-gradient(135deg, #1a0f0f, #0a0606)",
    "linear-gradient(135deg, #0d0d1a, #060608)",
    "linear-gradient(135deg, #0f0d08, #070600)",
    "linear-gradient(135deg, #0d0d0d, #040404)",
    "linear-gradient(135deg, #1a0d0d, #0d0606)",
    "linear-gradient(135deg, #0a0a18, #04040e)",
  ];

  grid.innerHTML = GALLERY_ITEMS.map((item, i) => `
    <div class="gallery-item ${item.height}" data-index="${i}" style="background: ${bgColors[i % bgColors.length]}; padding: ${item.height === 'tall' ? '60px 20px' : '30px 20px'};">
      ${SVG_ICONS[item.key] || ""}
      <div class="gallery-overlay">
        <span class="gallery-overlay-icon">⊕</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openLightbox(+item.dataset.index));
  });
}

/* ─── LIGHTBOX ──────────────────────────── */
function initLightbox() {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => navigateLightbox(-1));
  document.getElementById("lbNext").addEventListener("click", () => navigateLightbox(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(i) {
  lightboxIndex = i;
  renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  renderLightbox();
}
function renderLightbox() {
  const item = GALLERY_ITEMS[lightboxIndex];
  document.getElementById("lightboxImgWrap").innerHTML = SVG_ICONS[item.key] || "";
  document.getElementById("lightboxCaption").textContent = item.label;
}

/* ─── FADE-IN ON SCROLL ─────────────────── */
function initFadeIn() {
  observeFadeIn();
}

function observeFadeIn() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".fade-in:not(.visible)").forEach(el => obs.observe(el));
}

/* ─── RIPPLE ────────────────────────────── */
function initRipple() {
  document.addEventListener("click", e => {
    const btn = e.target.closest(".ripple");
    if (btn) rippleEffect({ target: btn, clientX: e.clientX, clientY: e.clientY });
  });
}

function rippleEffect(e) {
  const btn = e.target || e.currentTarget;
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = (e.clientX - rect.left - size / 2);
  const y = (e.clientY - rect.top - size / 2);
  const wave = document.createElement("span");
  wave.className = "ripple-wave";
  wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  btn.appendChild(wave);
  wave.addEventListener("animationend", () => wave.remove());
}

/* ─── TOAST ─────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ─── FORM HANDLERS ─────────────────────── */
function handleContactForm(e) {
  e.preventDefault();
  showToast("✦ Your message has been sent. We'll be in touch soon!");
  e.target.reset();
  return false;
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast("✦ Thank you for subscribing to AURELIA!");
  e.target.reset();
  return false;
}

/* ─── UTILITY ───────────────────────────── */
function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

/* ─── SMOOTH ACTIVE SECTION SCROLLSPY ───── */
window.addEventListener("scroll", () => {
  updateActiveLink();
}, { passive: true });
