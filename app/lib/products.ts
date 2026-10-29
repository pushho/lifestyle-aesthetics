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
      },
      {
        slug: "hyalure-volume-plus",
        name: "Hyalure Volume Plus",
        summary: "Higher-volume HA option for deeper structural support.",
        indications: ["Volume", "Structure"],
      },
      {
        slug: "hyalure-lips",
        name: "Hyalure Lips",
        summary: "HA filler designed for lip definition and soft enhancement.",
        indications: ["Lips"],
      },
      {
        slug: "hyalure-light",
        name: "Hyalure Light",
        summary: "Lighter HA profile for refined, subtle correction.",
        indications: ["Fine lines", "Subtle fill"],
      },
      {
        slug: "erelle-volume",
        name: "Erelle Volume",
        summary: "CMC bioscaffold filler for stable volumetric shaping.",
        indications: ["Volume", "Contour"],
      },
      {
        slug: "erelle-revital",
        name: "Erelle Revital",
        summary: "CMC revitalisation product focused on skin quality support.",
        indications: ["Skin quality", "Revitalisation"],
      },
      {
        slug: "luxus-body",
        name: "Luxus Body",
        summary: "Body filler for silhouette and contour refinement.",
        indications: ["Body contour"],
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
      },
      {
        slug: "nebula-acto2-orion",
        name: "Nebula ACTO2 Orion",
        summary:
          "Higher-strength biphasic peel with 14% TCA for moderate to severe acne and scarring support.",
        indications: ["Acne", "Scarring", "Deep renewal"],
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
      },
      {
        slug: "virtue",
        name: "Virtue RF",
        summary:
          "Needle RF platform with cooling and multiple handpiece options.",
        indications: ["Tightening", "Wrinkles", "Remodelling"],
      },
      {
        slug: "sunny",
        name: "Sunny",
        summary: "Monopolar and bipolar RF system with versatile handpieces.",
        indications: ["RF rejuvenation", "Tightening"],
      },
      {
        slug: "pladuo",
        name: "Pladuo",
        summary: "Dual nitrogen and argon plasma system for tissue coagulation.",
        indications: ["Plasma", "Resurfacing"],
      },
      {
        slug: "diacore",
        name: "Diacore",
        summary: "Electromagnetic-field device for targeted clinical applications.",
        indications: ["Muscle support"],
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
      },
      {
        slug: "lavieen",
        name: "Lavieen",
        summary: "1927 nm thulium fractional laser for brightening and resurfacing.",
        indications: ["Brightening", "Melasma", "Texture"],
      },
      {
        slug: "beladona",
        name: "Beladona",
        summary: "CO₂ fractional laser for ablative resurfacing protocols.",
        indications: ["Resurfacing", "Scars"],
      },
      {
        slug: "v-laser",
        name: "V Laser",
        summary: "Long-pulse 532/1064 nm system for vascular and pigment indications.",
        indications: ["Vascular", "Pigment"],
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
      },
      {
        slug: "inpure",
        name: "Inpure",
        summary:
          "Aqua peel, hydrogen water, and galvanic facial system for cleansing and permeation.",
        indications: ["Cleansing", "Hydration", "Prep"],
      },
    ],
  },
];

export function getCategoryLabel(id: ProductCategoryId) {
  return PRODUCT_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export function getBrandBySlug(slug: string) {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getBrandsByCategory(category?: string) {
  if (!category || category === "all") return BRANDS;
  return BRANDS.filter((brand) => brand.category === category);
}

export function isProductCategoryId(value: string): value is ProductCategoryId {
  return PRODUCT_CATEGORIES.some((category) => category.id === value);
}

export const BRAND_NAMES = BRANDS.map((brand) => brand.name);
