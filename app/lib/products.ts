export const PRODUCT_CATEGORIES = [
  {
    id: "injectables",
    label: "Injectables",
    description: "HA fillers, CMC bioscaffolds, and collagen biostimulators.",
  },
  {
    id: "peels",
    label: "Clinical Peels",
    description: "Professional chemical peels for acne, pigment, and renewal.",
  },
  {
    id: "devices",
    label: "Devices",
    description: "Lasers, RF, plasma, and clinic treatment systems.",
  },
] as const;

export type ProductCategoryId = (typeof PRODUCT_CATEGORIES)[number]["id"];

export type Product = {
  slug: string;
  name: string;
  summary: string;
  indications?: string[];
  image?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
};

export type Brand = {
  slug: string;
  name: string;
  category: ProductCategoryId;
  tagline: string;
  description: string;
  highlights: string[];
  website: string;
  products: Product[];
};

export const BRANDS: Brand[] = [
  {
    slug: "hyalure",
    name: "Hyalure",
    category: "injectables",
    tagline: "Italian HA and CMC aesthetic injectables",
    description:
      "Hyalure is an Italian injectable portfolio spanning hyaluronic acid fillers, CMC bioscaffolds, and body contouring products for aesthetic practitioners.",
    highlights: [
      "HA fillers for face and lips",
      "CMC bioscaffold volumising and revitalisation",
      "Body filler options for contour work",
    ],
    website: "https://hyalure.com/",
    products: [
      {
        slug: "hyalure-volum",
        name: "Hyalure Volum",
        summary: "Hyaluronic acid filler for facial volume and contour support.",
        indications: ["Volume", "Contour"],
        image: {
          src: "/products/hyalure/hyalure-volum.jpg",
          alt: "Hyalure Volum hyaluronic acid filler box",
          fit: "contain",
        },
      },
      {
        slug: "hyalure-volume-plus",
        name: "Hyalure Volume Plus",
        summary: "Higher-volume HA option for deeper structural support.",
        indications: ["Volume", "Structure"],
        image: {
          src: "/products/hyalure/hyalure-volume-plus.png",
          alt: "Hyalure Volume Plus hyaluronic acid filler box",
          fit: "contain",
        },
      },
      {
        slug: "hyalure-lips",
        name: "Hyalure Lips",
        summary: "HA filler designed for lip definition and soft enhancement.",
        indications: ["Lips"],
        image: {
          src: "/products/hyalure/hyalure-lips.png",
          alt: "Hyalure Lips hyaluronic acid filler box",
          fit: "contain",
        },
      },
      {
        slug: "hyalure-light",
        name: "Hyalure Light",
        summary: "Lighter HA profile for refined, subtle correction.",
        indications: ["Fine lines", "Subtle fill"],
        image: {
          src: "/products/hyalure/hyalure-light.png",
          alt: "Hyalure Light hyaluronic acid filler box",
          fit: "contain",
        },
      },
      {
        slug: "erelle-volume",
        name: "Erelle Volume",
        summary: "CMC bioscaffold filler for stable volumetric shaping.",
        indications: ["Volume", "Contour"],
        image: {
          src: "/products/hyalure/erelle-volume.png",
          alt: "Erelle Volume CMC bioscaffold filler box",
          fit: "contain",
        },
      },
      {
        slug: "erelle-revital",
        name: "Erelle Revital",
        summary: "CMC revitalisation product focused on skin quality support.",
        indications: ["Skin quality", "Revitalisation"],
        image: {
          src: "/products/hyalure/erelle-revital.png",
          alt: "Erelle Revital CMC skin quality box",
          fit: "contain",
        },
      },
      {
        slug: "luxus-body",
        name: "Luxus Body",
        summary: "Body filler for silhouette and contour refinement.",
        indications: ["Body contour"],
        image: {
          src: "/products/hyalure/luxus-body.png",
          alt: "Luxus Body contouring filler box",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "mitelier",
    name: "Mitelier",
    category: "injectables",
    tagline: "PLLA collagen biostimulator",
    description:
      "Mitelier is a Korean PLLA-based biostimulator designed to support gradual collagen stimulation and natural-looking volume restoration.",
    highlights: [
      "Poly-L-lactic acid biostimulation",
      "Gradual collagen-focused results",
      "Clinic injectable for volume and structure",
    ],
    website: "https://www.mitelier.com/",
    products: [
      {
        slug: "mitelier-plla",
        name: "Mitelier PLLA",
        summary:
          "Collagen-stimulating injectable for gradual facial volume and firmness support.",
        indications: ["Biostimulation", "Volume", "Firmness"],
        image: {
          src: "/products/mitelier/mitelier.png",
          alt: "Mitelier PLLA dermal filler vial",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "supernova",
    name: "Supernova",
    category: "peels",
    tagline: "Biphasic TCA chemical peels",
    description:
      "Supernova Laboratories offers Nebula ACTO2 biphasic chemical peels combining TCA with an oxygenating phase for professional skin renewal protocols.",
    highlights: [
      "Professional TCA peel systems",
      "Protocols for acne and pigment concerns",
      "Designed for trained clinical use",
    ],
    website: "https://supernovalaboratories.com/en/nebula-acto2/",
    products: [
      {
        slug: "nebula-acto2",
        name: "Nebula ACTO2",
        summary:
          "Biphasic peel with 10% TCA for renewal, pigment, and acne-related concerns.",
        indications: ["Acne", "Pigment", "Renewal"],
        image: {
          src: "/products/supernova/nebula-acto2.jpg",
          alt: "Nebula ACTO2 biphasic peel vial",
          fit: "contain",
        },
      },
      {
        slug: "nebula-acto2-orion",
        name: "Nebula ACTO2 Orion",
        summary:
          "Higher-strength biphasic peel with 14% TCA for moderate to severe acne and scarring support.",
        indications: ["Acne", "Scarring", "Deep renewal"],
        image: {
          src: "/products/supernova/nebula-acto2-orion.jpg",
          alt: "Nebula ACTO2 Orion strong biphasic peel vial",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "finemec",
    name: "FineMEC",
    category: "devices",
    tagline: "Long-pulse lasers and microwave technology",
    description:
      "FineMEC supplies professional aesthetic devices including dual and alexandrite long-pulse lasers, plus Finewave microwave technology for non-invasive contouring.",
    highlights: [
      "Long-pulse laser platforms",
      "Hair removal and vascular versatility",
      "Microwave body and face treatment option",
    ],
    website: "https://finemecglobal.net/",
    products: [
      {
        slug: "nobleen",
        name: "Nobleen",
        summary: "Dual long-pulse laser platform at 755 nm and 1064 nm.",
        indications: ["Hair removal", "Vascular", "Pigment"],
      },
      {
        slug: "noblex",
        name: "Noblex",
        summary: "High-powered long-pulse Alexandrite laser at 755 nm.",
        indications: ["Hair removal", "Pigment"],
      },
      {
        slug: "finewave",
        name: "Finewave",
        summary:
          "Non-invasive microwave device with dual cooling for body and face treatment areas.",
        indications: ["Body contour", "Skin laxity"],
      },
    ],
  },
  {
    slug: "shenb",
    name: "ShenB",
    category: "devices",
    tagline: "RF, microneedling, and plasma systems",
    description:
      "ShenB develops energy-based aesthetic devices spanning microneedle RF, advanced needle RF, monopolar/bipolar RF, dual plasma, and related clinical platforms.",
    highlights: [
      "Microneedle and needle RF systems",
      "Plasma coagulation technology",
      "Clinic platforms for tightening and resurfacing",
    ],
    website: "https://www.shenb.com/eng/",
    products: [
      {
        slug: "vivace",
        name: "Vivace",
        summary: "Microneedle RF system with adjustable depth and LED modes.",
        indications: ["Tightening", "Texture", "Collagen"],
        image: {
          src: "/products/shenb/vivace.png",
          alt: "ShenB Vivace microneedle RF device",
          fit: "contain",
        },
      },
      {
        slug: "virtue",
        name: "Virtue RF",
        summary:
          "Needle RF platform with cooling and multiple handpiece options.",
        indications: ["Tightening", "Wrinkles", "Remodelling"],
        image: {
          src: "/products/shenb/virtue.png",
          alt: "ShenB Virtue RF needle platform",
          fit: "contain",
        },
      },
      {
        slug: "sunny",
        name: "Sunny",
        summary: "Monopolar and bipolar RF system with versatile handpieces.",
        indications: ["RF rejuvenation", "Tightening"],
        image: {
          src: "/products/shenb/sunny.png",
          alt: "ShenB Sunny monopolar and bipolar RF device",
          fit: "contain",
        },
      },
      {
        slug: "pladuo",
        name: "Pladuo",
        summary: "Dual nitrogen and argon plasma system for tissue coagulation.",
        indications: ["Plasma", "Resurfacing"],
        image: {
          src: "/products/shenb/pladuo.png",
          alt: "ShenB Pladuo dual plasma system",
          fit: "contain",
        },
      },
      {
        slug: "diacore",
        name: "Diacore",
        summary: "Electromagnetic-field device for targeted clinical applications.",
        indications: ["Muscle support"],
        image: {
          src: "/products/shenb/diacore.png",
          alt: "ShenB Diacore electromagnetic treatment device",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "wontech",
    name: "Wontech",
    category: "devices",
    tagline: "Pigment, vascular, and resurfacing lasers",
    description:
      "Wontech manufactures laser platforms used for toning, pigment, vascular concerns, fractional resurfacing, and related aesthetic indications.",
    highlights: [
      "Q-switched and long-pulse lasers",
      "Thulium and CO₂ fractional options",
      "Broad pigment and vascular coverage",
    ],
    website: "https://wtlaser-en.com/products",
    products: [
      {
        slug: "pastelle-pro",
        name: "Pastelle Pro",
        summary: "Q-switched Nd:YAG laser for toning, pigment, and tattoo work.",
        indications: ["Pigment", "Toning", "Tattoo"],
        image: {
          src: "/products/wontech/pastelle-pro.png",
          alt: "Wontech Pastelle Pro Q-switched Nd:YAG laser",
          fit: "contain",
        },
      },
      {
        slug: "lavieen",
        name: "Lavieen",
        summary: "1927 nm thulium fractional laser for brightening and resurfacing.",
        indications: ["Brightening", "Melasma", "Texture"],
        image: {
          src: "/products/wontech/lavieen.png",
          alt: "Wontech Lavieen thulium fractional laser",
          fit: "contain",
        },
      },
      {
        slug: "beladona",
        name: "Beladona",
        summary: "CO₂ fractional laser for ablative resurfacing protocols.",
        indications: ["Resurfacing", "Scars"],
        image: {
          src: "/products/wontech/beladona.png",
          alt: "Wontech Beladona CO2 fractional laser",
          fit: "contain",
        },
      },
      {
        slug: "v-laser",
        name: "V Laser",
        summary: "Long-pulse 532/1064 nm system for vascular and pigment indications.",
        indications: ["Vascular", "Pigment"],
        image: {
          src: "/products/wontech/v-laser.png",
          alt: "Wontech V Laser long-pulse vascular and pigment system",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "gtg",
    name: "GTG",
    category: "devices",
    tagline: "Toning laser and facial care systems",
    description:
      "GTG Medical provides clinic devices including Q-switched laser platforms and multi-step facial systems for cleansing, permeation, and hydration protocols.",
    highlights: [
      "Q-switched Nd:YAG laser",
      "Aqua peel and hydrogen water facial system",
      "Practical clinic treatment workflows",
    ],
    website: "https://www.gtgmedical.co.kr/21",
    products: [
      {
        slug: "investa",
        name: "Investa",
        summary: "Q-switched Nd:YAG laser for toning and pigment management.",
        indications: ["Toning", "Pigment"],
        image: {
          src: "/products/gtg/investa.jpg",
          alt: "GTG Investa Q-switched Nd:YAG laser",
          fit: "contain",
        },
      },
      {
        slug: "inpure",
        name: "Inpure",
        summary:
          "Aqua peel, hydrogen water, and galvanic facial system for cleansing and permeation.",
        indications: ["Cleansing", "Hydration", "Prep"],
        image: {
          src: "/products/gtg/inpure.jpg",
          alt: "GTG Inpure aqua peel and hydrogen facial system",
          fit: "contain",
        },
      },
    ],
  },
  {
    slug: "zimmer",
    name: "Zimmer Aesthetics",
    category: "devices",
    tagline: "German cooling, shaping, and stimulation systems",
    description:
      "Zimmer Aesthetics, part of Zimmer MedizinSysteme in Neu-Ulm, supplies non-invasive devices for skin cooling, body shaping, muscle stimulation, shockwave treatment, and professional facial care.",
    highlights: [
      "Cold-air cooling for laser, IPL, and injections",
      "RF, shockwave, and magnetic muscle platforms",
      "Facial ultrasound, hydration, and regenerative care",
    ],
    website: "https://zimmer-aesthetics.de/en/products/",
    products: [
      {
        slug: "cryo-pro",
        name: "Cryo Pro",
        summary:
          "Next-generation cold-air therapy with particulate and UVC filtration for skin cooling during laser procedures.",
        indications: ["Skin cooling", "Laser", "Plume filtration"],
        image: {
          src: "/products/zimmer/cryo-pro.webp",
          alt: "Zimmer Cryo Pro cold-air therapy device",
        },
      },
      {
        slug: "cryo-7",
        name: "Cryo 7",
        summary:
          "Quiet all-day cold-air system, chilled to −30°C, for pain relief during laser and IPL treatments.",
        indications: ["Skin cooling", "Laser", "IPL"],
        image: {
          src: "/products/zimmer/cryo-7.webp",
          alt: "Zimmer Cryo 7 cold-air therapy device",
        },
      },
      {
        slug: "cryo-6",
        name: "Cryo 6",
        summary:
          "High-performance cold-air cooling to −30°C for injections, laser, IPL, and RF microneedling.",
        indications: ["Skin cooling", "Injections", "Laser"],
        image: {
          src: "/products/zimmer/cryo-6.webp",
          alt: "Zimmer Cryo 6 cold-air therapy device",
        },
      },
      {
        slug: "cryo-mini",
        name: "Cryo Mini",
        summary:
          "Compact cold-air device cooling to −18°C for injections and energy-based treatments in smaller rooms.",
        indications: ["Skin cooling", "Compact", "Laser"],
        image: {
          src: "/products/zimmer/cryo-mini.webp",
          alt: "Zimmer Cryo Mini compact cold-air device",
        },
      },
      {
        slug: "zface",
        name: "ZFace",
        summary:
          "Two-in-one facial platform combining ultrasound and electrostimulation for wrinkles, toning, and skin quality.",
        indications: ["Facial toning", "Wrinkles", "Skin quality"],
        image: {
          src: "/products/zimmer/zface.webp",
          alt: "Zimmer ZFace ultrasound and electrostimulation device",
        },
      },
      {
        slug: "zshape",
        name: "ZShape",
        summary:
          "Radiofrequency body-shaping system with vacuum for collagen contraction and contour refinement.",
        indications: ["Body shaping", "RF", "Tightening"],
        image: {
          src: "/products/zimmer/zshape.jpg",
          alt: "Zimmer ZShape radiofrequency body-shaping device",
        },
      },
      {
        slug: "zfield-dual",
        name: "ZField Dual",
        summary:
          "High-energy inductive system with paired applicators for muscle development in arms, legs, abdomen, and buttocks.",
        indications: ["Muscle toning", "Body forming"],
        image: {
          src: "/products/zimmer/zfield-dual.webp",
          alt: "Zimmer ZField Dual muscle stimulation device",
        },
      },
      {
        slug: "ztone",
        name: "ZTone",
        summary:
          "High-energy induction therapy for muscle development and fat reduction in 20- to 30-minute sessions.",
        indications: ["Muscle toning", "Fat reduction"],
        image: {
          src: "/products/zimmer/ztone.webp",
          alt: "Zimmer ZTone muscle toning device",
        },
      },
      {
        slug: "zstim",
        name: "ZStim",
        summary:
          "Eight-channel electrotherapy device for muscle toning, blood flow, and volume across several regions at once.",
        indications: ["Muscle stimulation", "Toning"],
        image: {
          src: "/products/zimmer/zstim.jpg",
          alt: "Zimmer ZStim electrotherapy device",
        },
      },
      {
        slug: "zwave-pro",
        name: "ZWave Pro",
        summary:
          "Radial shockwave system for collagen stimulation, cellulite, scars, stretch marks, and skin tightening.",
        indications: ["Cellulite", "Skin tightening", "Scars"],
        image: {
          src: "/products/zimmer/zwave-pro.webp",
          alt: "Zimmer ZWave Pro radial shockwave device",
        },
      },
      {
        slug: "zhydro",
        name: "ZHydro",
        summary:
          "Professional hydration mask for deep moisture, used with ultrasound, electrostimulation, and microneedling.",
        indications: ["Hydration", "Skin quality"],
        image: {
          src: "/products/zimmer/zhydro.jpg",
          alt: "Zimmer ZHydro hydration mask sachets",
        },
      },
      {
        slug: "exo-z",
        name: "Exo-Z",
        summary:
          "Plant-derived exosome treatment with peptides, vitamins, and antioxidants for regeneration and barrier support.",
        indications: ["Regeneration", "Skin barrier", "Texture"],
        image: {
          src: "/products/zimmer/exo-z.jpg",
          alt: "Zimmer Exo-Z treatment vials",
        },
      },
      {
        slug: "gentle-pro",
        name: "Gentle Pro",
        summary:
          "Low-energy radial shockwave system for erectile dysfunction and Peyronie's disease.",
        indications: ["Men's health", "Shockwave"],
        image: {
          src: "/products/zimmer/gentle-pro.webp",
          alt: "Zimmer Gentle Pro shockwave device",
        },
      },
      {
        slug: "conticure",
        name: "ContiCure",
        summary:
          "Magnetic-field chair system for pelvic-floor training, incontinence prevention, and continence treatment.",
        indications: ["Pelvic floor", "Incontinence"],
        image: {
          src: "/products/zimmer/conticure.jpeg",
          alt: "Zimmer ContiCure console and treatment chair",
        },
      },
    ],
  },
];

export type CatalogueProduct = Product & {
  brandSlug: string;
  brandName: string;
  brandWebsite: string;
  brandTagline: string;
  brandDescription: string;
  category: ProductCategoryId;
};

export function getCategoryLabel(id: ProductCategoryId) {
  return PRODUCT_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export function getBrandBySlug(slug: string) {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getAllProducts(): CatalogueProduct[] {
  return BRANDS.flatMap((brand) =>
    brand.products.map((product) => ({
      ...product,
      brandSlug: brand.slug,
      brandName: brand.name,
      brandWebsite: brand.website,
      brandTagline: brand.tagline,
      brandDescription: brand.description,
      category: brand.category,
    })),
  );
}

export function getProductBySlug(slug: string) {
  return getAllProducts().find((product) => product.slug === slug);
}

export function getProductsByCategory(category?: string) {
  const products = getAllProducts();
  if (!category || category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: CatalogueProduct, limit = 3) {
  return getAllProducts()
    .filter(
      (item) =>
        item.slug !== product.slug && item.brandSlug === product.brandSlug,
    )
    .slice(0, limit);
}

export function getBrandsByCategory(category?: string) {
  if (!category || category === "all") return BRANDS;
  return BRANDS.filter((brand) => brand.category === category);
}

export function isProductCategoryId(value: string): value is ProductCategoryId {
  return PRODUCT_CATEGORIES.some((category) => category.id === value);
}

export const BRAND_NAMES = BRANDS.map((brand) => brand.name);
