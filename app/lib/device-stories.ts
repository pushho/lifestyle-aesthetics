export type StoryFrame = "square" | "wide" | "photo" | "portrait";

export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
  detail?: string;
  frame?: StoryFrame;
};

export type StorySpec = {
  label: string;
  value: string;
};

export type StoryMetric = {
  value: string;
  label: string;
  hint?: string;
};

export type StoryLayout =
  | "split"
  | "showcase"
  | "compare"
  | "dark-feature"
  | "pillars"
  | "specs";

export type StoryBlock = {
  eyebrow?: string;
  title: string;
  accent?: string;
  body?: string;
  points?: string[];
  images?: StoryImage[];
  specs?: StorySpec[];
  layout?: StoryLayout;
};

export type DeviceStory = {
  metrics: StoryMetric[];
  blocks: StoryBlock[];
};

const stories: Record<string, DeviceStory> = {
  investa: {
    metrics: [
      {
        value: "1064 / 532",
        label: "Native wavelengths (nm)",
        hint: "Optional 595 nm and 660 nm dye handpieces",
      },
      {
        value: "5–10 ns",
        label: "In-Toning twin pulse",
        hint: "Up to 1.6 J for pigment chromophores",
      },
      {
        value: "300 µs",
        label: "Long-Peel mode",
        hint: "Up to 2.0 J for thermal rejuvenation",
      },
      {
        value: "1–15 Hz",
        label: "Repetition rate",
        hint: "Articulated arm with 6 handpiece options",
      },
    ],
    blocks: [
      {
        layout: "split",
        eyebrow: "Platform",
        title: "Q-switched Nd:YAG for",
        accent: "pigment & tattoo work.",
        body: "Investa is a solid-state Nd:YAG laser. Q-switching releases a high-energy pulse in nanoseconds, while a KTP crystal doubles the frequency to 532 nm alongside the native 1064 nm beam. Optional dye handpieces extend the system to 595 nm and 660 nm.",
        points: [
          "1064 nm — deeper black and brown pigment, plus wrinkle-oriented toning",
          "532 nm — superficial red, yellow, and pink pigment",
          "Optional 595 nm — acne, vessels, and erythematous lesions",
          "Optional 660 nm — freckles and blemishes with less vessel interaction",
        ],
        images: [
          {
            src: "/products/gtg/investa/console.webp",
            alt: "Investa Q-switched Nd:YAG console with articulated arm and touchscreen",
            caption: "Articulated-arm console with touchscreen",
            frame: "portrait",
          },
        ],
      },
      {
        layout: "showcase",
        eyebrow: "Wavelengths",
        title: "Four bands across",
        accent: "shallow & deep targets.",
        body: "532 nm stays in the upper skin for red-based pigment, while 1064 nm reaches deeper black and brown targets. Optional 595 nm and 660 nm dye handpieces address vessels, erythema, freckles, and blemishes.",
        images: [
          {
            src: "/products/gtg/investa/wavelength-1064.webp",
            alt: "Diagram of 1064 nm reaching deeper skin layers, marked for black, brown, and blue pigment",
            caption: "1064 nm",
            detail: "Deep black, brown, and blue pigment",
            frame: "square",
          },
          {
            src: "/products/gtg/investa/wavelength-532.webp",
            alt: "Diagram of 532 nm acting in the superficial skin, marked for red, yellow, and pink pigment",
            caption: "532 nm",
            detail: "Superficial red, yellow, and pink pigment",
            frame: "square",
          },
          {
            src: "/products/gtg/investa/wavelength-595.webp",
            alt: "Diagram of optional 595 nm acting in the upper dermis",
            caption: "595 nm · Optional dye",
            detail: "Acne, vessels, and erythematous lesions",
            frame: "square",
          },
          {
            src: "/products/gtg/investa/wavelength-660.webp",
            alt: "Diagram of optional 660 nm reaching the dermis for melanin-selective treatment",
            caption: "660 nm · Optional dye",
            detail: "Freckles and blemishes with lower vessel uptake",
            frame: "square",
          },
        ],
      },
      {
        layout: "compare",
        eyebrow: "Pulse modes",
        title: "Two profiles beyond",
        accent: "standard Q-switch.",
        body: "In-Toning splits nanosecond energy to break up pigment chromophores gently. Long-Peel stretches delivery to 300 microseconds to heat the dermis for rejuvenation.",
        images: [
          {
            src: "/products/gtg/investa/in-toning.webp",
            alt: "In-Toning pulse diagram showing twin nanosecond peaks, 5 to 10 ns up to 1.6 J",
            caption: "In-Toning · 5–10 ns",
            detail: "Twin nanosecond peaks up to 1.6 J to fragment chromophores",
            frame: "photo",
          },
          {
            src: "/products/gtg/investa/long-peel.webp",
            alt: "Long-Peel pulse diagram showing a 300 microsecond pulse up to 2.0 J",
            caption: "Long-Peel · 300 µs",
            detail: "Microsecond thermal pulse up to 2.0 J for skin rejuvenation",
            frame: "photo",
          },
        ],
      },
      {
        layout: "showcase",
        eyebrow: "Delivery",
        title: "Six handpieces,",
        accent: "zoom to dye.",
        body: "Standard delivery covers variable zoom and fixed collimated spots. Fractional and dye handpieces complete the optional clinical set.",
        points: [
          "Zoom · 2–10 mm",
          "Collimated · 7 mm",
          "1064 nm Fractional · 7 × 7 mm",
          "532 nm Fractional · 4 × 4 mm",
          "595 nm Dye · 4.5 mm",
          "660 nm Dye · 4.5 mm",
        ],
        images: [
          {
            src: "/products/gtg/investa/zoom.webp",
            alt: "Investa zoom handpiece with a black adjustment ring",
            caption: "Zoom handpiece",
            detail: "2–10 mm adjustable spot",
            frame: "wide",
          },
          {
            src: "/products/gtg/investa/collimated.webp",
            alt: "Investa collimated handpiece with blue rings",
            caption: "Collimated handpiece",
            detail: "7 mm uniform beam",
            frame: "wide",
          },
          {
            src: "/products/gtg/investa/fractional.webp",
            alt: "Investa fractional handpiece with red rings",
            caption: "Fractional handpiece",
            detail: "Optional 1064 nm (7 × 7) & 532 nm (4 × 4)",
            frame: "wide",
          },
        ],
      },
      {
        layout: "specs",
        eyebrow: "Reference",
        title: "Technical",
        accent: "specifications.",
        specs: [
          { label: "Laser source", value: "Q-switched Nd:YAG" },
          {
            label: "Wavelengths",
            value: "1064 nm / 532 nm, optional 595 nm & 660 nm dye",
          },
          {
            label: "Modes",
            value: "1064 nm, 532 nm, In-Toning, Multi, Long-Peel",
          },
          { label: "Pulse rate", value: "1–15 Hz" },
          { label: "Power input", value: "220–230 VAC, 3 kVA" },
          { label: "Dimensions", value: "660 × 270 × 850 mm (W × D × H)" },
          { label: "Weight", value: "65 kg" },
        ],
      },
    ],
  },
  nobleen: {
    metrics: [
      {
        value: "755 / 1064",
        label: "Dual long-pulse (nm)",
        hint: "Alexandrite and Nd:YAG in one platform",
      },
      {
        value: "2–20 mm",
        label: "Zoom & square spots",
        hint: "Up to 20 × 20 mm with optional square beam",
      },
      {
        value: "53 J",
        label: "Stable pulse output",
        hint: "Fluence up to 80 J/cm² at up to 10 Hz",
      },
      {
        value: "48",
        label: "Stored memories",
        hint: "Preset parameters with RCS gas cooling",
      },
    ],
    blocks: [
      {
        layout: "pillars",
        eyebrow: "Platform",
        title: "Dual long-pulse Alexandrite",
        accent: "and Nd:YAG.",
        body: "Nobleen combines 755 nm Alexandrite and 1064 nm Nd:YAG in a single FineMEC workstation for hair removal, benign pigment, vascular lesions, and genesis-style rejuvenation — all through one zoom handpiece.",
        points: [
          "Stable output of 53 J with fluence up to 80 J/cm²",
          "Repetition rate up to 10 Hz for fast coverage",
          "48 stored treatment memories and preset parameters",
          "RCS cryogen gas cooling with optional air-cooler adaptor",
        ],
      },
      {
        layout: "compare",
        eyebrow: "Spot geometry",
        title: "Round and square beams",
        accent: "from one system.",
        body: "The dual-cylinder zoom handpiece shifts from 2 mm to 20 mm without swapping optics. An optional square-beam handpiece lays down uniform coverage up to 20 × 20 mm with minimal overlap.",
        images: [
          {
            src: "/products/finemec/nobleen/spot-sizes.webp",
            alt: "Round spot sizes from 2 mm to 20 mm",
            caption: "Round zoom · 2–20 mm",
            detail: "Continuous spot adjustment without changing tips",
            frame: "wide",
          },
          {
            src: "/products/finemec/nobleen/square-spots.webp",
            alt: "Square beam spot sizes from 2 mm to 20 mm",
            caption: "Square beam · up to 20 × 20 mm",
            detail: "Optional geometric spot for even pass-to-pass tiling",
            frame: "wide",
          },
        ],
      },
      {
        layout: "dark-feature",
        eyebrow: "Indications & fractional",
        title: "Four treatment families,",
        accent: "plus 755 nm fractional.",
        body: "Alongside hair, vascular, benign pigment, and genesis rejuvenation, the optional 755 nm fractional handpiece places 200 micro-beams of 400 µm — leaving surrounding tissue intact for melasma and brightening protocols.",
        points: [
          "Hair removal across skin types with 755 nm & 1064 nm",
          "Benign pigmented lesions and tone evening",
          "Genesis thermal technique for facial rejuvenation",
          "Facial and leg vascular lesions",
          "200-dot, 400 µm fractional 755 nm for melasma with lower PIH risk",
        ],
        images: [
          {
            src: "/products/finemec/nobleen/fractional.webp",
            alt: "Diagram of the 755 nm fractional handpiece delivering 200 dots of 400 micrometres into pigmented skin",
            caption: "755 nm fractional · 200 dots at 400 µm",
            frame: "photo",
          },
        ],
      },
      {
        layout: "showcase",
        eyebrow: "Delivery",
        title: "Three FineMEC",
        accent: "handpieces.",
        body: "A champagne zoom handpiece ships as the everyday workhorse, joined by optional square-beam and 755 nm fractional optics.",
        images: [
          {
            src: "/products/finemec/nobleen/main-handpiece.webp",
            alt: "Nobleen main FineMEC handpiece in a champagne finish",
            caption: "Main zoom handpiece",
            detail: "Dual-wavelength 2–20 mm round beam",
            frame: "wide",
          },
          {
            src: "/products/finemec/nobleen/square-handpiece.webp",
            alt: "Nobleen optional square-beam handpiece in green",
            caption: "Square-beam handpiece",
            detail: "Optional · up to 20 × 20 mm",
            frame: "wide",
          },
          {
            src: "/products/finemec/nobleen/fractional-handpiece.webp",
            alt: "Nobleen optional 755 nm fractional handpiece in blue",
            caption: "755 nm fractional",
            detail: "Optional · 200 micro-dots at 400 µm",
            frame: "wide",
          },
        ],
      },
    ],
  },
  virtue: {
    metrics: [
      {
        value: "3",
        label: "RF handpieces",
        hint: "Smart RF, Deep RF, and monopolar Exact RF",
      },
      {
        value: "0.1–6 mm",
        label: "Adjustable depth",
        hint: "Stepped in precise 0.1 mm increments",
      },
      {
        value: "0.5 / 1 / 2",
        label: "Frequencies (MHz)",
        hint: "Up to 10 sub-pulse divisions",
      },
      {
        value: "FDA · CE",
        label: "Cleared platform",
        hint: "US FDA, European CE, and Korea MFDS",
      },
    ],
    blocks: [
      {
        layout: "showcase",
        eyebrow: "Handpieces",
        title: "Smart, Deep,",
        accent: "and Exact RF.",
        body: "Virtue RF ships with three dedicated applicators — shallow bipolar work, deep multi-frequency passes with active cooling, and targeted monopolar delivery.",
        images: [
          {
            src: "/products/shenb/virtue/smart-rf.webp",
            alt: "Virtue Smart RF bipolar handpiece with insulated and non-insulated needle tips",
            caption: "Smart RF · Bipolar",
            detail: "0.1–3.5 mm · 1 & 2 MHz · insulated or non-insulated tips",
            frame: "wide",
          },
          {
            src: "/products/shenb/virtue/deep-rf.webp",
            alt: "Virtue Deep RF bipolar handpiece with 12-pin and 36-pin tips",
            caption: "Deep RF · Bipolar + ACS",
            detail: "0.1–6 mm · 0.5 / 1 / 2 MHz · 12-pin & 36-pin cooled tips",
            frame: "wide",
          },
          {
            src: "/products/shenb/virtue/exact-rf.webp",
            alt: "Virtue Exact RF monopolar handpiece with an adjustable needle tip",
            caption: "Exact RF · Monopolar",
            detail: "Single-point precision with rotating depth lever",
            frame: "wide",
          },
        ],
      },
      {
        layout: "dark-feature",
        eyebrow: "Mechanism",
        title: "Cool the surface,",
        accent: "coagulate the dermis.",
        body: "Virtue RF’s cooling plate lowers epidermal temperature before and during the shot, while microneedles carry high-frequency current directly into the target dermal plane. Cleared by the US FDA, European CE, and Korea MFDS.",
        points: [
          "Active surface cooling protects the epidermis",
          "Robotic smooth microneedle insertion in 0.1 mm steps",
          "High-frequency current released at needle depth",
          "Controlled dermal coagulation zone with minimal surface heat",
        ],
        images: [
          {
            src: "/products/shenb/virtue/cooling.webp",
            alt: "Cross-section showing the Virtue cooling plate over the epidermis and energy in the dermis",
            caption: "Epidermal cooling plate over dermal coagulation",
            frame: "photo",
          },
        ],
      },
      {
        layout: "compare",
        eyebrow: "Control",
        title: "Pulse division, frequency,",
        accent: "and 0.1 mm depth.",
        body: "IPRS breaks a continuous shot into up to ten sub-pulses, energy duration adjusts from 0.1 s to 7 s, and needle depth steps in 0.1 mm increments.",
        images: [
          {
            src: "/products/shenb/virtue/pulse.webp",
            alt: "Diagram comparing Virtue pulse 1 as a continuous delivery with pulse 10 divided into on and off segments",
            caption: "IPRS · Pulse 1 to Pulse 10",
            detail: "Continuous energy or up to ten micro-pulses with thermal rest",
            frame: "wide",
          },
          {
            src: "/products/shenb/virtue/depth.webp",
            alt: "Diagram of Exact RF needle length control, adjusted with a rotating lever",
            caption: "Rotary depth control",
            detail: "Fine 0.1 mm adjustments tailored to tissue thickness",
            frame: "wide",
          },
        ],
      },
    ],
  },
  inpure: {
    metrics: [
      {
        value: "3-in-1",
        label: "Facial workstation",
        hint: "Aqua peel, hydrogen water, and galvanic",
      },
      {
        value: "H₂",
        label: "Electrolyzed water",
        hint: "Smaller clusters for gentle pore loosening",
      },
      {
        value: "S1 · S2 · S3",
        label: "Sequential serums",
        hint: "Soft peel, BHA sebum care, and nutrition",
      },
      {
        value: "MCS",
        label: "Face roller finish",
        hint: "Lifting pass for elasticity and circulation",
      },
    ],
    blocks: [
      {
        layout: "split",
        eyebrow: "Console",
        title: "Aqua peel, hydrogen water,",
        accent: "and galvanic in one tower.",
        body: "Inpure pairs water-pressure peeling with an onboard hydrogen generator, galvanic handpiece, three solution reservoirs, and a dual-ball MCS face roller — taking a facial from pore clearance through lifting in one session.",
        points: [
          "Water-galvanic handpiece for simultaneous aqua peel",
          "Onboard hydrogen water generator for pre-peel toning",
          "Dedicated reservoirs for serums S1, S2, and S3",
          "MCS face roller and ground bar for the lifting finish",
          "Built for congestion, sebum, dull tone, and dehydration",
        ],
        images: [
          {
            src: "/products/gtg/inpure/console-front.webp",
            alt: "Front of the Inpure console with face roller, touchscreen, galvanic handpiece, and solution bottles",
            caption: "Touchscreen, hydrogen unit, galvanic handpiece & MCS roller",
            frame: "portrait",
          },
        ],
      },
      {
        layout: "compare",
        eyebrow: "Hydrogen & galvanic",
        title: "Finer water clusters,",
        accent: "two-way ion flow.",
        body: "Electrolyzed hydrogen water forms finer clusters than tap water to loosen waste with less irritation, while low-voltage galvanic modes switch between drawing debris out and driving actives in.",
        images: [
          {
            src: "/products/gtg/inpure/general-water.webp",
            alt: "Illustration of large water droplets sitting on the skin surface",
            caption: "Ordinary water",
            detail: "Larger clusters remain on the surface",
            frame: "square",
          },
          {
            src: "/products/gtg/inpure/hydrogen-water.webp",
            alt: "Illustration of fine hydrogen-water particles across the skin surface",
            caption: "Hydrogen water",
            detail: "Finer clusters lower surface pH and hydrate",
            frame: "square",
          },
          {
            src: "/products/gtg/inpure/cleansing.webp",
            alt: "Diagram of galvanic cleansing mode drawing debris out of a pore",
            caption: "Galvanic cleansing",
            detail: "Draws loosened sebum and debris from the pore",
            frame: "photo",
          },
          {
            src: "/products/gtg/inpure/permeation.webp",
            alt: "Diagram of galvanic permeation mode driving solution into the skin",
            caption: "Galvanic permeation",
            detail: "Drives serum ions into cleansed skin",
            frame: "photo",
          },
        ],
      },
      {
        layout: "dark-feature",
        eyebrow: "Protocol",
        title: "Four cabin steps,",
        accent: "then the MCS roller.",
        body: "Every facial follows a clear five-stage arc — starting with hydrogen toning, stepping through three targeted Aquasure solutions, and closing with mechanical roller stimulation.",
        points: [
          "Hydrogen toning — radical care, lower surface pH, and initial moisture",
          "Serum S1 — gentle peel, exfoliation, and first pore clearance",
          "Serum S2 — BHA sebum control for congested T-zones and texture",
          "Serum S3 — moisture, nutrition, elasticity, and tone support",
          "MCS face roller — lifting pass for circulation and firmness",
        ],
        images: [
          {
            src: "/products/gtg/inpure/serum-s1.webp",
            alt: "Inpure serum S1 bottle for peel-off and exfoliation",
            caption: "S1 · Peel",
            frame: "square",
          },
          {
            src: "/products/gtg/inpure/serum-s2.webp",
            alt: "Inpure serum S2 bottle for sebum control",
            caption: "S2 · BHA sebum",
            frame: "square",
          },
          {
            src: "/products/gtg/inpure/serum-s3.webp",
            alt: "Inpure serum S3 bottle for nutrition and moisturising",
            caption: "S3 · Nutrition",
            frame: "square",
          },
        ],
      },
    ],
  },
};

export function getDeviceStory(slug: string) {
  return stories[slug];
}
