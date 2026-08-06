/* ==========================================================================
   MAISON ÉLITE - Haute Pâtisserie & Executive Dairy Bar
   Data Store & Interactive Engine (Bilingual EN / ES)
   ========================================================================== */

const menuData = [
  // HAUTE PÂTISSERIE (DESSERTS)
  {
    id: "eclair-or-24k",
    category: "desserts",
    image: "./assets/eclair_or_24k.jpg",
    isDonut: false,
    badge: { en: "Grand Cru", es: "Grand Cru" },
    sensoryTags: ["cocoa", "woody", "smokey"],
    allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    title: {
      en: "Éclair au Chocolat Grands Crus & 24K Gold",
      es: "Éclair au Chocolat Grands Crus & Or 24K"
    },
    shortDescription: {
      en: "Artisanal choux pastry filled with 70% Wild Ghanaian Criollo cocoa crémeux, dark mirror glaze and 24K edible gold leaf.",
      es: "Choux artesanal de mantequilla AOP relleno de cremoso de cacao silvestre de Ghana 70%, glaseado de espejo oscuro y lámina de oro de 24 quilates."
    },
    fullDescription: {
      en: "Crafted using AOP Charentes-Poitou butter choux dough, this signature éclair houses an un-aerated 70% single-origin Ghanaian Criollo chocolate crémeux cooked to precisely 83°C. Finished with an obsidian chocolate mirror glaze and handcrafted 24-karat edible gold leaves.",
      es: "Elaborado con masa choux de mantequilla AOP Charentes-Poitou, este éclair alberga un cremoso denso al 70% de chocolate Criollo de origen único de Ghana. Se completa con un glaseado espejo de obsidiana y láminas de oro comestible de 24 quilates fijadas a mano."
    },
    sensoryProfile: {
      intensity: 95,
      sweetness: 45,
      acidity: 20,
      texture: { en: "Velvety & Crisp", es: "Sedoso y Crujiente" }
    },
    pairing: {
      en: "Ideal for executive board meetings. Recommended pairing: Champagne Blanc de Blancs Millésimé or Aged Vintage Port.",
      es: "Excelente para acompañar reuniones de junta directiva. Maridaje recomendado: Champagne Blanc de Blancs Millésimé o Oporto Vintage de Guarda."
    }
  },
  {
    id: "dona-chocolate-star-confetti",
    category: "desserts",
    image: "./assets/dona_truffe_gianduja.jpg",
    isDonut: true,
    badge: { en: "Executive Donut", es: "Dona de Autor" },
    sensoryTags: ["cocoa", "roasted", "spiced"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    title: {
      en: "Chocolate Star & Confetti Donut",
      es: "Dona Gourmet de Chocolate Étoile & Confetti"
    },
    shortDescription: {
      en: "A long-fermented milk brioche dough matrix submerged in precision-controlled oil, coated in 70% single-origin Peruvian dark chocolate ganache, garnished with confetti dragées and precision-cut étoiles.",
      es: "Masa brioche de leche de fermentación prolongada de 18h, cubierta de ganache de chocolate negro peruano 70%, drageas 'confetti' y estrellas de azúcar 'étoile'."
    },
    fullDescription: {
      en: "A long-fermented milk brioche dough matrix, developed via a multi-stage proofing cycle of 18 hours. Submerged in precision-temperature-controlled high-oleic palm oil to achieve an even, closed cellular structure and optimal golden color. Coated in a decadent 70% single-origin Peruvian dark chocolate couverture ganache glaze, hand-dipped to ideal sheen. Garnished with a dual texture application: vibrant ‘confetti’ rod dragées and precision-cut multi-colored ‘étoile’ (star) garniture.",
      es: "Una matriz de masa brioche de leche de fermentación prolongada desarrollada mediante un ciclo de fermentación multietapa de 18 horas. Sumergida en aceite de palma de alto contenido oleico a temperatura controlada de precisión para lograr una estructura celular uniforme y dorada. Cubierta con un decadente glaseado de ganache de cobertura de chocolate negro peruano del 70% de origen único, sumergido a mano. Decorada con drageas 'confetti' vibrantes y estrellas multicolor 'étoile' cortadas a precisión."
    },
    sensoryProfile: {
      intensity: 75,
      sweetness: 65,
      acidity: 5,
      texture: { en: "Pillowy & Rich", es: "Esponjosa y Rica" }
    },
    pairing: {
      en: "Elegantly paired with a double-ristretto pull of a full-bodied Colombian Huila coffee, or perhaps a well-aged Tawny Port.",
      es: "Elegantemente maridada con un espresso ristretto doble de café colombiano del Huila de cuerpo entero, o un oporto Tawny envejecido."
    }
  },
  {
    id: "dona-pink-berry-star",
    category: "desserts",
    image: "./assets/dona_vanille_praline.jpg",
    isDonut: true,
    badge: { en: "Executive Donut", es: "Dona de Autor" },
    sensoryTags: ["citrus", "floral", "refreshing"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    title: {
      en: "Pink Berry Star Donut",
      es: "Dona Royale de Fresas Silvestres & Étoile"
    },
    shortDescription: {
      en: "Traditional long-fermented milk brioche flash-fried to precise contrast, hand-dipped in wild mountain strawberry coulis and white chocolate glaze, dusted with multi-colored precision étoiles.",
      es: "Brioche de leche tradicional de fermentación prolongada, frita con precisión, glaseada a mano en coulis de fresas silvestres y chocolate blanco, decorada con estrellas multicolor 'étoile'."
    },
    fullDescription: {
      en: "The same traditional long-fermented milk brioche dough matrix, proofed to ideal cellular density, flash-fried in premium vegetable oil to achieve precise textural contrast. Eglantine-infused coulis de fraises (wild mountain strawberries) and white chocolate emulsion-based glaze, meticulously hand-dipped for a high-gloss, even coat. Dusted with an intricate, multi-colored precision ‘étoile’ (star) garniture, meticulously applied by hand.",
      es: "Matriz de masa brioche de leche tradicional de fermentación prolongada, fermentada hasta obtener la densidad celular ideal y frita en aceite vegetal de primera calidad para lograr un contraste de textura preciso. Glaseado a base de emulsión de chocolate blanco y coulis de fresas silvestres, bañado a mano para un acabado brillante. Espolvoreado con estrellas multicolor 'étoile' aplicadas a mano."
    },
    sensoryProfile: {
      intensity: 70,
      sweetness: 70,
      acidity: 20,
      texture: { en: "Soft & Velvety", es: "Suave y Aterciopelada" }
    },
    pairing: {
      en: "Pairs gracefully with chilled glasses of dry Rosé champagne or a delicate silver-needle white tea.",
      es: "Armoniza de manera distinguida con copas heladas de Champagne Rosé seco o un delicado té blanco Aguja de Plata."
    }
  },
  {
    id: "tartelette-citron-amalfi",
    category: "desserts",
    image: "./assets/tartelette_citron_amalfi.jpg",
    isDonut: false,
    badge: { en: "Citrus Creation", es: "Creación Cítrica" },
    sensoryTags: ["citrus", "refreshing", "creamy"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    title: {
      en: "Tartelette Infiniment Citron & Wild Bergamot Meringue",
      es: "Tartelette Infiniment Citron & Merengue Silvestre a la Bergamota"
    },
    shortDescription: {
      en: "Browned butter sablé crust, Amalfi lemon curd infused with lemon thyme, topped with flame-torched bergamot Swiss meringue.",
      es: "Sablé bretona de mantequilla tostada, curd de limones de la Costa de Amalfi con tomillo limón y merengue suizo sopleteado a la bergamota."
    },
    fullDescription: {
      en: "Hand-pressed browned-butter sablé pastry shell holding a velvety lemon curd made from PGI Amalfi lemon juice emulsified at low temperature with wild lemon thyme. Crowned with silky Swiss meringue torched with organic Calabria bergamot aroma.",
      es: "Concha sablé bretona de mantequilla tostada a mano con un curd de limón IGP Costa de Amalfi emulsionado a baja temperatura con tomillo limón silvestre. Coronada con merengue suizo a la bergamota de Calabria."
    },
    sensoryProfile: {
      intensity: 75,
      sweetness: 45,
      acidity: 85,
      texture: { en: "Vibrant & Smooth", es: "Vibrante y Sedoso" }
    },
    pairing: {
      en: "Complements high-level negotiations. Pairs with Wild Lemon Verbena & Peppermint Botanical Infusion.",
      es: "Complementa negociaciones de alto nivel. Marida con Infusión Botánica de Hierbaluisa & Menta Piperita."
    }
  },
  {
    id: "paris-brest-sesame",
    category: "desserts",
    image: "./assets/paris_brest_sesame.jpg",
    isDonut: false,
    badge: { en: "French Classic", es: "Clásico Francés" },
    sensoryTags: ["smokey", "roasted", "caramel"],
    allergens: ["Gluten", "Dairy", "Sesame", "Tree Nuts", "Eggs"],
    title: {
      en: "Paris-Brest Signature with Kyoto Black Sesame & Guérande",
      es: "Paris-Brest Signature al Sésamo Negro de Kioto & Caramelo Guérande"
    },
    shortDescription: {
      en: "Choux pastry crown, roasted Kyoto black sesame mousseline cream, liquid Guérande salted butter caramel heart.",
      es: "Corona de pasta choux artesanal, mousseline de sésamo negro tostado de Kioto y corazón líquido de caramelo a la Sal de Guérande."
    },
    fullDescription: {
      en: "A refined interpretation of the Parisian classic featuring slow-roasted black sesame seeds from Kyoto blended into a light mousseline cream. Center hides a fluid liquid caramel seasoned with hand-harvested Guérande sea salt.",
      es: "Una interpretación refinada del clásico parisino con sésamo negro tostado de Kioto en mousseline ligera. El centro esconde un caramelo fluido con sal de mar de Guérande cosechada a mano."
    },
    sensoryProfile: {
      intensity: 85,
      sweetness: 55,
      acidity: 10,
      texture: { en: "Nutty & Creamy", es: "Tostado y Cremoso" }
    },
    pairing: {
      en: "Pairs exceptionally well with Roasted Dong Ding Oolong Tea or 12-Year Single Malt Scotch Whisky.",
      es: "Marida excepcionalmente con Té Oolong Tostado Dong Ding o Single Malt Scotch Whisky de 12 Años."
    }
  },
  {
    id: "mousse-cacao-tonka",
    category: "desserts",
    image: "./assets/mousse_cacao_tonka.jpg",
    isDonut: false,
    badge: { en: "Haute Sphere", es: "Esfera de Autor" },
    sensoryTags: ["woody", "fruity", "spiced"],
    allergens: ["Dairy", "Tree Nuts", "Soy", "Eggs"],
    title: {
      en: "Spiced Cocoa Mousse, Tonka Bean & Wild Raspberries",
      es: "Mousse de Cacao Especiado, Haba Tonka & Frutos Rojos Silvestres"
    },
    shortDescription: {
      en: "Criollo cocoa mousse sphere infused with Amazonian tonka bean, wild raspberry insert, gianduja crunch base.",
      es: "Esfera de mousse de cacao criollo con infusión de haba tonka amazónica, inserto de frambuesas silvestres y base de gianduja."
    },
    fullDescription: {
      en: "High-artistry chocolate sphere combining cold-macerated Amazonian tonka bean (notes of sour cherry, almond, and sweet wood) with single-origin Criollo chocolate. Features a tart wild forest raspberry liquid core and hazelnut gianduja crunch.",
      es: "Esfera de alta repostería que combina haba tonka amazónica macerada en frío (notas de guinda, almendra y madera dulce) con chocolate Criollo de origen único. Con centro fluido de frambuesas silvestres y crujiente de gianduja."
    },
    sensoryProfile: {
      intensity: 90,
      sweetness: 50,
      acidity: 65,
      texture: { en: "Silky & Crunchy Core", es: "Sedoso con Corazón Crujiente" }
    },
    pairing: {
      en: "Recommended pairing: Late Bottled Vintage Port or Hibiscus & Spices Infusion.",
      es: "Maridaje recomendado: Vino Oporto LBV o Infusión de Flor de Jamaica & Especias Reales."
    }
  },
  {
    id: "mille-feuille-vanille-bleue",
    category: "desserts",
    image: "./assets/mille_feuille_vanille_bleue.jpg",
    isDonut: false,
    badge: { en: "Patisserie Art", es: "Arte Hojaldrado" },
    sensoryTags: ["vanilla", "caramel", "creamy"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    title: {
      en: "Caramelized Mille-Feuille with Reunion Island Blue Vanilla",
      es: "Mille-Feuille Caramélisé à la Vanille Bleue de la Réunion"
    },
    shortDescription: {
      en: "Micro-layered caramelized inverted puff pastry with 36-hour cold-infused Blue Vanilla diplomate cream.",
      es: "Hojaldre inverso caramelizado en capas milimétricas, intercalado con crema diplomática a la Vainilla Azul de la Isla Reunión."
    },
    fullDescription: {
      en: "Inverted puff pastry laminated with AOP dry butter and baked between iron plates for glass-like caramelization. Layered with diplomate cream infused for 36 hours at 3°C with rare Reunion Island Blue Vanilla pods.",
      es: "Hojaldre inverso hojaldrado con mantequilla seca AOP y horneado entre placas de hierro para una caramelización vítrea. Intercalado con crema diplomática infusionada 36 horas a 3°C con Vainilla Azul de Reunión."
    },
    sensoryProfile: {
      intensity: 80,
      sweetness: 55,
      acidity: 10,
      texture: { en: "Glassy Crisp & Delicate", es: "Crujiente Vítreo y Delicado" }
    },
    pairing: {
      en: "Pairs elegantly with Fujian White Needle Supreme Tea or Brut Rosé Champagne.",
      es: "Armoniza elegantemente con Té Blanco Needle Supreme de Fujian o Champagne Brut Rosé."
    }
  },

  // MILK-BASED BEVERAGES (BEBIDAS LÁCTEAS)
  {
    id: "vaso-leche-organica",
    category: "beverages",
    image: "./assets/vaso_leche_michelin.jpg",
    isDonut: false,
    badge: { en: "Pure Artisan Milk", es: "Leche Orgánica de Origen" },
    sensoryTags: ["creamy", "vanilla", "umami"],
    allergens: ["Dairy"],
    title: {
      en: "Verdant Alpine Whole Milk Glass",
      es: "Vaso de Leche Entera Orgánica de Granja"
    },
    shortDescription: {
      en: "Pure 100% pasture-raised A2 whole milk from Alpine Jersey cows, unhomogenized and chilled to 4°C with natural golden cream undertones.",
      es: "Vaso de leche entera 100% orgánica de vacas Jersey A2 de libre pastoreo, servida fría a 4°C, cremosa y con notas naturales de mantequilla y vainilla."
    },
    fullDescription: {
      en: "Pure 100% pasture-raised A2 whole milk sourced from free-roaming Alpine Jersey cows. Served unhomogenized and chilled to precisely 4°C to preserve its natural golden cream top, velvety mouthfeel, and delicate sweet vanilla-cream undertones.",
      es: "Leche entera pura 100% de pastoreo A2 proveniente de vacas Jersey alpinas. Servida sin homogeneizar y fría a exactamente 4°C para conservar su capa de crema dorada natural, cuerpo aterciopelado y delicados matices dulces de vainilla."
    },
    sensoryProfile: {
      intensity: 60,
      sweetness: 45,
      acidity: 5,
      texture: { en: "Creamy & Pure Silk", es: "Cremosa y Seda Pura" }
    },
    pairing: {
      en: "The quintessential pairing for artisanal gourmet brioche donuts and executive morning tastings.",
      es: "El maridaje esencial e icónico para acompañar donas brioche gourmet y catas ejecutivas matutinas."
    }
  },
  {
    id: "matcha-samidori-uji",
    category: "beverages",
    image: "./assets/matcha_samidori_uji.jpg",
    isDonut: false,
    badge: { en: "Ceremonial Grade", es: "Grado Ceremonial" },
    sensoryTags: ["umami", "floral", "creamy"],
    allergens: ["Dairy"],
    title: {
      en: "Uji Samidori Ceremonial Matcha Latte",
      es: "Matcha Lattea Samidori Ceremonial Uji"
    },
    shortDescription: {
      en: "First-harvest Samidori ceremonial matcha from Uji Kyoto, hand-whisked with bamboo chasen, low-heat Alpine Jersey milk.",
      es: "Matcha ceremonial grado supremo Samidori de Uji (Kioto), batido a mano con chasen de bambú y leche entera de vacas Jersey."
    },
    fullDescription: {
      en: "Shade-grown for 30 days and granite stone-ground, this first-harvest Samidori matcha is whisked at 70°C in low-mineral water using a bamboo chasen. Combined with low-heat pasteurized Jersey whole milk steamed to 62°C for peak L-theanine umami.",
      es: "Cultivado a la sombra durante 30 días y molido en piedra de granito, este matcha Samidori de primera cosecha se bate a 70°C. Se combina con leche entera Jersey pasteurizada a baja temperatura y emulsionada a 62°C."
    },
    sensoryProfile: {
      intensity: 85,
      sweetness: 35,
      acidity: 15,
      texture: { en: "Rich Umami & Microfoam", es: "Rico Umami y Microespuma" }
    },
    pairing: {
      en: "Ideal companion for executive morning briefings and creative sessions.",
      es: "Compañero ideal para briefings ejecutivos matutinos y sesiones creativas."
    }
  },
  {
    id: "mocha-valrhona-avena",
    category: "beverages",
    image: "./assets/mocha_valrhona_avena.jpg",
    isDonut: false,
    badge: { en: "Artisan Coffee", es: "Café de Especialidad" },
    sensoryTags: ["smokey", "cocoa", "roasted"],
    allergens: ["Gluten (Oats)", "Soy"],
    title: {
      en: "Valrhona Mocha & Applewood Smoked Oat Milk",
      es: "Mocha Valrhona Guanaja & Leche de Avena Tostada al Humo de Manzano"
    },
    shortDescription: {
      en: "Single-origin Ethiopian ristretto, Valrhona Guanaja 70% dark chocolate, applewood cold-smoked barista oat milk.",
      es: "Ristretto arábica Etiopía Yirgacheffe, chocolate amargo Valrhona Guanaja 70% y leche de avena con humo frío de madera de manzano."
    },
    fullDescription: {
      en: "A sophisticated coffee creation combining single-estate Yirgacheffe Ethiopian espresso with melt-emulsified Valrhona Guanaja 70% dark chocolate. Mixed with barista oat milk gently infused with cold applewood smoke.",
      es: "Una creación sofisticada que combina espresso etíope Yirgacheffe con chocolate negro Valrhona Guanaja 70% emulsionado. Mezclado con leche de avena barista infusionada con humo frío de madera de manzano."
    },
    sensoryProfile: {
      intensity: 90,
      sweetness: 45,
      acidity: 30,
      texture: { en: "Smokey & Velvet Body", es: "Ahumado y Cuerpo Terciopelo" }
    },
    pairing: {
      en: "Pairs magnificently with gourmet brioche donuts during high-level meetings.",
      es: "Marida magníficamente con donas brioche gourmet durante reuniones de alto nivel."
    }
  },
  {
    id: "cappuccino-tonka-jersey",
    category: "beverages",
    image: "./assets/cappuccino_tonka_jersey.jpg",
    isDonut: false,
    badge: { en: "Specialty Dairy", es: "Lácteo Especial" },
    sensoryTags: ["spiced", "woody", "creamy"],
    allergens: ["Dairy"],
    title: {
      en: "Tonka Bean Cappuccino with Jersey A2 Whole Milk",
      es: "Cappuccino Infusionado al Haba Tonka & Leche Entera Jersey A2"
    },
    shortDescription: {
      en: "Organic high-altitude espresso, cold-macerated Amazonian tonka bean, Jersey A2 milk (5.5% fat), micro-dusted Criollo cocoa.",
      es: "Espresso orgánico de altura con infusión de haba tonka amazónica, leche entera de vacas Jersey A2 (5.5% grasa) y cacao criollo."
    },
    fullDescription: {
      en: "High-altitude organic Arabica espresso infused with micro-planed wild Amazonian tonka bean. Steamed with 100% pasture-raised A2 Jersey whole milk featuring a dense 1.5cm microfoam cap and dusted with raw Criollo cocoa powder.",
      es: "Espresso orgánico de altura infusionado con haba tonka amazónica rascada al momento. Texturizado con leche entera A2 de vacas Jersey con una microespuma de 1.5 cm y velo de cacao criollo amargo."
    },
    sensoryProfile: {
      intensity: 85,
      sweetness: 40,
      acidity: 20,
      texture: { en: "Velvety Microfoam", es: "Microespuma Aterciopelada" }
    },
    pairing: {
      en: "Excellent choice for midday executive coffee breaks.",
      es: "Opción excelente para pausas de café ejecutivas a mediodía."
    }
  },
  {
    id: "chai-imperial-azafran",
    category: "beverages",
    image: "./assets/chai_imperial_azafran.jpg",
    isDonut: false,
    badge: { en: "Royal Spice", es: "Especias Reales" },
    sensoryTags: ["spiced", "floral", "creamy"],
    allergens: ["Dairy"],
    title: {
      en: "Kashmiri Saffron & Green Cardamom Imperial Chai",
      es: "Chai Impérial au Safran du Cachemire & Leche de Granja"
    },
    shortDescription: {
      en: "Single-estate Assam black tea decoction, Mysore green cardamom, Kashmiri Mongra saffron, condensed Jersey cream.",
      es: "Decocción de té negro Assam con cardamomo verde de Mysore, azafrán Kashmiri Mongra bloomerizado en leche Jersey."
    },
    fullDescription: {
      en: "Decoction of single-estate Assam orthodox black tea cooked with crushed green Mysore cardamom pods. Infused with Grade-1 Kashmiri Mongra saffron threads bloomed in warm Jersey whole milk with a touch of house-made condensed cream.",
      es: "Decocción de té negro Assam con vainas de cardamomo verde de Mysore. Infusionado con hebras de azafrán Kashmiri Mongra Grado 1 bloomerizadas en leche entera Jersey y un toque de leche condensada artesanal."
    },
    sensoryProfile: {
      intensity: 88,
      sweetness: 50,
      acidity: 10,
      texture: { en: "Opulent & Warm Body", es: "Cuerpo Opulento y Cálido" }
    },
    pairing: {
      en: "Ideal for executive lounge receptions and evening networking events.",
      es: "Ideal para recepciones en lounge ejecutivo y eventos de networking nocturnos."
    }
  }
];

// App State
let currentLang = "en"; // Default: English
let currentCategory = "all";
let currentSensoryFilter = "all";
let searchQuery = "";

// UI Text Dictionary
const i18n = {
  en: {
    heroTag: "Haute Pâtisserie & Executive Beverage Bar",
    heroTitle: "Maison Élite <span>Menu</span>",
    heroDesc: "A 3-star Michelin culinary concept curated for executive dining lounge experiences. Featuring artisanal brioche donuts, grand cru chocolate creations, and rare single-origin dairy concoctions.",
    allTab: "All Creations",
    dessertsTab: "Haute Pâtisserie",
    donutsTab: "Executive Donuts",
    beveragesTab: "Milk Selection",
    searchPlaceholder: "Search by dish, ingredient, terroir...",
    sensoryLabel: "Sensory Profile:",
    sensoryAll: "All Profiles",
    sensoryCocoa: "Cocoa & Dark",
    sensoryRoasted: "Roasted & Nutty",
    sensoryFloral: "Floral & Botanical",
    sensoryCitrus: "Citrus & Fresh",
    sensorySpiced: "Spiced & Warm",
    sensoryUmami: "Savory & Umami",
    viewTasting: "Tasting Experience",
    pairingTitle: "Executive Pairing Recommendation",
    allergensTitle: "Allergen & Dietary Information",
    techniqueTitle: "Michelin Culinary Technique",
    sensoryProfileTitle: "Organoleptic Profile",
    noResultsTitle: "No executive creations found",
    noResultsDesc: "Try adjusting your search criteria or sensory profile filters.",
    footerText: "© Maison Élite Haute Gastronomie. Curated for Executive Boardrooms & Fine Corporate Dining."
  },
  es: {
    heroTag: "Alta Repostería & Bar Lácteo Ejecutivo",
    heroTitle: "Menú <span>Maison Élite</span>",
    heroDesc: "Un concepto gastronómico de 3 estrellas Michelin diseñado para salones ejecutivos. Con donas brioche de autor, creaciones de cacao grand cru y bebidas lácteas de selección de origen único.",
    allTab: "Todas las Creaciones",
    dessertsTab: "Haute Pâtisserie",
    donutsTab: "Donas de Autor",
    beveragesTab: "Bebidas Lácteas",
    searchPlaceholder: "Buscar por platillo, ingrediente, origen...",
    sensoryLabel: "Perfil Sensorial:",
    sensoryAll: "Todos los Perfiles",
    sensoryCocoa: "Cacao & Oscuro",
    sensoryRoasted: "Tostado & Frutos Secos",
    sensoryFloral: "Floral & Botánico",
    sensoryCitrus: "Cítrico & Fresco",
    sensorySpiced: "Especiado & Cálido",
    sensoryUmami: "Sabroso & Umami",
    viewTasting: "Experiencia de Cata",
    pairingTitle: "Recomendación de Maridaje Ejecutivo",
    allergensTitle: "Información de Alérgenos & Dieta",
    techniqueTitle: "Técnica Gastronómica Michelin",
    sensoryProfileTitle: "Perfil Organoléptico",
    noResultsTitle: "No se encontraron creaciones",
    noResultsDesc: "Intenta ajustar los criterios de búsqueda o los filtros de perfil sensorial.",
    footerText: "© Maison Élite Haute Gastronomie. Creado para Juntas Directivas & Alta Gastronomía Corporativa."
  }
};

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderUI();
  setupEventListeners();
});

function setupEventListeners() {
  // Envelope / Letter Cover Click to Fade Out Event
  const letterCover = document.getElementById("letterCover");
  if (letterCover) {
    letterCover.addEventListener("click", () => {
      letterCover.classList.add("fading");
      setTimeout(() => {
        letterCover.style.display = "none";
      }, 1800);
    });
  }

  // Subtle Language Toggle Event
  const langToggleBtn = document.getElementById("subtleLangToggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "es" : "en";
      const langTextSpan = document.getElementById("currentLangText");
      if (langTextSpan) {
        langTextSpan.textContent = currentLang === "en" ? "ES" : "EN";
      }
      renderUI();
    });
  }

  // Category Tab Events
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      tabButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      renderCards();
    });
  });

  // Search Input Event
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }

  // Sensory Chip Filter Events
  const sensoryChips = document.querySelectorAll(".sensory-chip");
  sensoryChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      sensoryChips.forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      currentSensoryFilter = e.target.dataset.sensory;
      renderCards();
    });
  });

  // Modal Close Event
  const modalOverlay = document.getElementById("tastingModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // ESC Key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function renderUI() {
  const dict = i18n[currentLang];
  
  // Static Labels Update
  document.getElementById("heroTag").textContent = dict.heroTag;
  document.getElementById("heroTitle").innerHTML = dict.heroTitle;
  document.getElementById("heroDesc").textContent = dict.heroDesc;
  
  document.getElementById("tabAll").textContent = dict.allTab;
  document.getElementById("tabDesserts").textContent = dict.dessertsTab;
  document.getElementById("tabDonuts").textContent = dict.donutsTab;
  document.getElementById("tabBeverages").textContent = dict.beveragesTab;
  
  document.getElementById("searchInput").placeholder = dict.searchPlaceholder;
  document.getElementById("sensoryLabel").textContent = dict.sensoryLabel;

  // Update Sensory Filter Buttons text
  document.getElementById("chipAll").textContent = dict.sensoryAll;
  document.getElementById("chipCocoa").textContent = dict.sensoryCocoa;
  document.getElementById("chipRoasted").textContent = dict.sensoryRoasted;
  document.getElementById("chipFloral").textContent = dict.sensoryFloral;
  document.getElementById("chipCitrus").textContent = dict.sensoryCitrus;
  document.getElementById("chipSpiced").textContent = dict.sensorySpiced;
  document.getElementById("chipUmami").textContent = dict.sensoryUmami;

  document.getElementById("footerText").textContent = dict.footerText;

  renderCards();
}

function getFilteredData() {
  return menuData.filter(item => {
    // Category match
    if (currentCategory === "desserts" && item.category !== "desserts") return false;
    if (currentCategory === "donuts" && (!item.isDonut || item.category !== "desserts")) return false;
    if (currentCategory === "beverages" && item.category !== "beverages") return false;

    // Sensory profile match
    if (currentSensoryFilter !== "all") {
      if (!item.sensoryTags.includes(currentSensoryFilter)) return false;
    }

    // Search query match
    if (searchQuery) {
      const titleText = item.title[currentLang].toLowerCase();
      const descText = item.shortDescription[currentLang].toLowerCase();
      const fullText = item.fullDescription[currentLang].toLowerCase();
      if (!titleText.includes(searchQuery) && !descText.includes(searchQuery) && !fullText.includes(searchQuery)) {
        return false;
      }
    }

    return true;
  });
}

function renderCards() {
  const grid = document.getElementById("menuGrid");
  const filteredData = getFilteredData();
  const dict = i18n[currentLang];

  if (filteredData.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3 style="font-family: var(--font-serif); font-size: 24px; color: var(--color-gold-base); margin-bottom: 8px;">${dict.noResultsTitle}</h3>
        <p>${dict.noResultsDesc}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredData.map(item => {
    const isDonutClass = item.isDonut ? "donut-special-tag" : "";
    const badgeText = item.badge[currentLang];
    const categoryName = item.category === "desserts" ? (item.isDonut ? dict.donutsTab : dict.dessertsTab) : dict.beveragesTab;
    
    return `
      <article class="card" onclick="openModal('${item.id}')">
        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.title[currentLang]}" class="card-image" loading="lazy">
          <span class="badge-tag ${isDonutClass}">${badgeText}</span>
        </div>
        <div class="card-body">
          <span class="card-category">${categoryName}</span>
          <h3 class="card-title">${item.title[currentLang]}</h3>
          <p class="card-description">${item.shortDescription[currentLang]}</p>
          <div class="card-footer">
            <div class="sensory-notes-list">
              ${item.sensoryTags.map(tag => `<span class="note-pill">#${tag}</span>`).join("")}
            </div>
            <span class="view-tasting-btn">
              ${dict.viewTasting} <span>→</span>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function openModal(itemId) {
  const item = menuData.find(m => m.id === itemId);
  if (!item) return;

  const dict = i18n[currentLang];
  const modalOverlay = document.getElementById("tastingModal");
  
  document.getElementById("modalMediaImg").src = item.image;
  document.getElementById("modalMediaImg").alt = item.title[currentLang];
  document.getElementById("modalSubtitle").textContent = item.category === "desserts" ? dict.dessertsTab : dict.beveragesTab;
  document.getElementById("modalTitle").textContent = item.title[currentLang];
  
  document.getElementById("modalTechniqueTitle").textContent = dict.techniqueTitle;
  document.getElementById("modalDescription").textContent = item.fullDescription[currentLang];

  document.getElementById("modalSensoryTitle").textContent = dict.sensoryProfileTitle;
  document.getElementById("modalSensoryBars").innerHTML = `
    <div class="bar-item">
      <span class="bar-label">Intensity: ${item.sensoryProfile.intensity}%</span>
      <div class="bar-track"><div class="bar-fill" style="width: ${item.sensoryProfile.intensity}%"></div></div>
    </div>
    <div class="bar-item">
      <span class="bar-label">Sweetness: ${item.sensoryProfile.sweetness}%</span>
      <div class="bar-track"><div class="bar-fill" style="width: ${item.sensoryProfile.sweetness}%"></div></div>
    </div>
    <div class="bar-item">
      <span class="bar-label">Acidity / Crisp: ${item.sensoryProfile.acidity}%</span>
      <div class="bar-track"><div class="bar-fill" style="width: ${item.sensoryProfile.acidity}%"></div></div>
    </div>
    <div style="font-size: 13px; color: var(--color-gold-light); margin-top: 8px; font-style: italic;">
      Texture: ${item.sensoryProfile.texture[currentLang]}
    </div>
  `;

  document.getElementById("modalPairingBox").innerHTML = `
    <div class="pairing-title">⚜️ ${dict.pairingTitle}</div>
    <div class="pairing-text">${item.pairing[currentLang]}</div>
  `;

  document.getElementById("modalAllergensBox").innerHTML = `
    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-cream-muted); margin-bottom: 6px;">${dict.allergensTitle}:</div>
    <div class="allergen-tags">
      ${item.allergens.map(alg => `<span class="allergen-chip">${alg}</span>`).join("")}
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalOverlay = document.getElementById("tastingModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}
