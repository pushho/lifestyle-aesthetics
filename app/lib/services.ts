export type ServiceIconKey =
  | "wrench"
  | "calendar"
  | "gauge"
  | "bolt"
  | "headset"
  | "chip"
  | "graduation"
  | "layers"
  | "building"
  | "video"
  | "certificate"
  | "protocol"
  | "warehouse"
  | "snowflake"
  | "truck"
  | "clipboard"
  | "shield"
  | "radar"
  | "book"
  | "social"
  | "target"
  | "print"
  | "sparkles"
  | "rocket";

export type ServiceStat = {
  value: number;
  suffix: string;
  label: string;
  hint: string;
};

export type ServiceCapability = {
  icon: ServiceIconKey;
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Display index, e.g. "01". */
  index: string;
  name: string;
  /** First part of the hero headline. */
  titleLead: string;
  /** Gradient/italic part of the hero headline. */
  titleAccent: string;
  tagline: string;
  description: string;
  /** Rotating keywords shown in the hero marquee. */
  keywords: string[];
  /** Floating pills on the hero visual. */
  heroChips: string[];
  image: { src: string; alt: string };
  /** Per-service accent colour, applied via the --svc-accent CSS var. */
  accent: string;
  stats: ServiceStat[];
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  processIntro: string;
  process: ServiceStep[];
  faqs: FaqItem[];
};

const services: Service[] = [
  {
    slug: "biomedical-service",
    index: "01",
    name: "Biomedical Service",
    titleLead: "Biomedical",
    titleAccent: "Service.",
    tagline:
      "Factory-level care for every device we deliver — installation, calibration, maintenance, and rapid repair across the region.",
    description:
      "A treatment room that stops earning is every clinic's nightmare. Our biomedical engineers keep your devices running at peak performance — from the day we install them to years after the warranty conversation ends.",
    keywords: [
      "Professional Installation",
      "Calibration",
      "Preventive Maintenance",
      "Emergency Repair",
      "Genuine Spare Parts",
      "Safety Checks",
      "Technical Support",
      "Uptime",
    ],
    heroChips: ["PPM Programs", "24h Response", "Genuine Parts"],
    image: {
      src: "/assets/treatment-machine.webp",
      alt: "Aesthetic treatment device installed and maintained by Lifestyle Aesthetics",
    },
    accent: "#8b5cf6",
    stats: [
      {
        value: 14,
        suffix: "+",
        label: "Years of service",
        hint: "Supporting clinics since 2011.",
      },
      {
        value: 500,
        suffix: "+",
        label: "Devices supported",
        hint: "Installed and maintained across the region.",
      },
      {
        value: 6,
        suffix: "",
        label: "Countries covered",
        hint: "On-site and workshop support.",
      },
      {
        value: 24,
        suffix: "h",
        label: "Response target",
        hint: "For urgent breakdown calls.",
      },
    ],
    capabilitiesIntro:
      "From first install to emergency call-outs, our biomedical team covers the full life of your device — so it keeps performing like the day it arrived.",
    capabilities: [
      {
        icon: "wrench",
        title: "Professional Installation",
        description:
          "Certified engineers install, calibrate, and safety-check every device so it is clinic-ready from day one.",
      },
      {
        icon: "calendar",
        title: "Preventive Maintenance",
        description:
          "Scheduled PPM visits built around your usage — extending device lifespan and preventing mid-week breakdowns.",
      },
      {
        icon: "gauge",
        title: "Routine Servicing & Calibration",
        description:
          "Regular performance verification keeps energy output consistent, accurate, and compliant with safety standards.",
      },
      {
        icon: "bolt",
        title: "Emergency Service Visits",
        description:
          "Rapid on-site response when a device goes down — so your diary stays full and your patients stay happy.",
      },
      {
        icon: "headset",
        title: "Technical Support",
        description:
          "Direct access to engineers who know your device, your protocol, and your clinic setup — by phone or WhatsApp.",
      },
      {
        icon: "chip",
        title: "Spare Parts & Repairs",
        description:
          "Genuine parts sourced through our brand partners, with streamlined repair workflows that minimise downtime.",
      },
    ],
    processIntro:
      "A clear, proactive cycle keeps your equipment healthy — and keeps surprises off your schedule.",
    process: [
      {
        title: "Install & calibrate",
        description:
          "We deliver, position, install, and calibrate your device, then walk your team through safe daily operation.",
      },
      {
        title: "Schedule maintenance",
        description:
          "A preventive plan is built around your treatment volume — with reminders so nothing slips through the cracks.",
      },
      {
        title: "Monitor & support",
        description:
          "Day-to-day questions, settings, and troubleshooting are handled fast by engineers who already know your setup.",
      },
      {
        title: "Repair & restore",
        description:
          "If something fails, we respond quickly, source genuine parts, and get you back to full capacity with minimal fuss.",
      },
    ],
    faqs: [
      {
        question: "Do you only service devices purchased from Lifestyle Aesthetics?",
        answer:
          "Our engineers are trained and certified on every brand we distribute. If your device comes from our portfolio — even if you bought it elsewhere — get in touch and we will confirm coverage for your model.",
      },
      {
        question: "What's included in a preventive maintenance visit?",
        answer:
          "A typical PPM visit covers output calibration, safety-system checks, wear-and-tear inspection of consumables and handpieces, software status, cleaning, and a written service report for your records.",
      },
      {
        question: "How fast can you respond to a breakdown?",
        answer:
          "We target a 24-hour response for urgent calls in the UAE, and prioritise clinics whose treatment schedule is directly affected. Many issues are diagnosed remotely within the first call.",
      },
      {
        question: "Do you handle installation and staff orientation?",
        answer:
          "Yes. Every device we deliver is installed, calibrated, and signed off by our engineers — followed by a practical safety and operation walkthrough for your team.",
      },
      {
        question: "Are spare parts genuine?",
        answer:
          "Always. Parts are sourced directly through the brands we represent, which protects your device's performance, safety profile, and warranty status.",
      },
    ],
  },
  {
    slug: "clinical-training",
    index: "02",
    name: "Clinical Training",
    titleLead: "Clinical",
    titleAccent: "Training.",
    tagline:
      "Hands-on programs that turn new technology into confident, everyday treatments for your team.",
    description:
      "A device only performs as well as the hands using it. Our clinical trainers take your practitioners from first principles to advanced protocols — on-site at your clinic or at our Dubai facility — with certification and long-term protocol support.",
    keywords: [
      "Foundation Training",
      "Advanced Protocols",
      "Workshops",
      "Certification",
      "Live Demos",
      "Webinars",
      "On-Site Sessions",
      "Refreshers",
    ],
    heroChips: ["Certification", "On-Site & Online", "Live Demos"],
    image: {
      src: "/training-education.jpg",
      alt: "Hands-on clinical training session for aesthetic professionals",
    },
    accent: "#f59e0b",
    stats: [
      {
        value: 1200,
        suffix: "+",
        label: "Sessions delivered",
        hint: "Workshops, demos, and full programs.",
      },
      {
        value: 800,
        suffix: "+",
        label: "Professionals trained",
        hint: "Doctors, therapists, and clinic staff.",
      },
      {
        value: 6,
        suffix: "",
        label: "Countries reached",
        hint: "On-site and remote delivery.",
      },
      {
        value: 98,
        suffix: "%",
        label: "Satisfaction rate",
        hint: "From post-training feedback.",
      },
    ],
    capabilitiesIntro:
      "Whether you're onboarding a new device or levelling up an experienced team, there's a format that fits your calendar and your goals.",
    capabilities: [
      {
        icon: "graduation",
        title: "Foundation Programs",
        description:
          "One-to-two-day onboarding covering device fundamentals, indications, contraindications, and safety.",
      },
      {
        icon: "layers",
        title: "Advanced Protocol Workshops",
        description:
          "Multi-day deep-dives for experienced practitioners moving into specialised treatment protocols.",
      },
      {
        icon: "building",
        title: "On-Site Clinic Training",
        description:
          "Our trainers come to you — coaching your team on your own devices, rooms, and patient flow.",
      },
      {
        icon: "video",
        title: "Live Demos & Webinars",
        description:
          "Real-time virtual demonstrations and recorded sessions your team can revisit anytime, from anywhere.",
      },
      {
        icon: "certificate",
        title: "Certification & Materials",
        description:
          "Certificates of completion plus printed and digital treatment guides with every program.",
      },
      {
        icon: "protocol",
        title: "Ongoing Protocol Support",
        description:
          "Post-training access to updated parameters, new protocols, and refresher sessions as techniques evolve.",
      },
    ],
    processIntro:
      "Every program is shaped around your team's experience level — never a one-size-fits-all slideshow.",
    process: [
      {
        title: "Assess",
        description:
          "We map your team's experience, treatment goals, and device mix to the right program level.",
      },
      {
        title: "Tailor",
        description:
          "Content is adapted to your devices, your patient profile, and the pace your clinic can absorb.",
      },
      {
        title: "Deliver",
        description:
          "Hands-on sessions at your clinic or our Dubai facility — with live demonstration and supervised practice.",
      },
      {
        title: "Follow up",
        description:
          "Progress check-ins, refresher options, and protocol updates keep new skills sharp long after day one.",
      },
    ],
    faqs: [
      {
        question: "Who conducts the training?",
        answer:
          "Programs are led by our certified clinical trainers, supported by brand clinical specialists for advanced protocols. Your team learns from people who train on these devices every week.",
      },
      {
        question: "Is certification included?",
        answer:
          "Yes. Every participant receives a certificate of completion, along with the treatment guides and protocol documentation covered in the program.",
      },
      {
        question: "Can training happen at our clinic?",
        answer:
          "Absolutely — most of our training is delivered on-site so your team learns on the exact device and setup they'll use daily. We also host sessions at our Dubai facility.",
      },
      {
        question: "Do you train both doctors and clinic staff?",
        answer:
          "Yes. Programs are split into tracks for practitioners and for support staff, so everyone from injector to front desk understands the treatment journey.",
      },
      {
        question: "What if we need a refresher later?",
        answer:
          "Refreshers are part of the partnership. You can book follow-up sessions, join our webinars, or request updated protocols as techniques and parameters evolve.",
      },
    ],
  },
  {
    slug: "logistics-distribution",
    index: "03",
    name: "Logistics & Distribution",
    titleLead: "Logistics &",
    titleAccent: "Distribution.",
    tagline:
      "Climate-controlled warehousing and clinic-ready delivery across the region — handled end to end.",
    description:
      "Great products are only half the promise; getting them to your clinic safely, on time, and in perfect condition is the other half. Our logistics operation runs warehousing, cold chain, customs, and delivery so you never have to think about it.",
    keywords: [
      "Warehousing",
      "Cold Chain",
      "Delivery Fleet",
      "Inventory",
      "Customs Clearance",
      "Order Tracking",
      "Stock Management",
      "GCC-Wide",
    ],
    heroChips: ["Cold Chain", "6 Countries", "Clinic-Ready"],
    image: {
      src: "/about/dubai-skyline.jpg",
      alt: "Dubai skyline — hub of the Lifestyle Aesthetics regional distribution network",
    },
    accent: "#0d9488",
    stats: [
      {
        value: 6,
        suffix: "",
        label: "Countries served",
        hint: "Across the GCC and wider region.",
      },
      {
        value: 98,
        suffix: "%",
        label: "On-time deliveries",
        hint: "Measured across the last 12 months.",
      },
      {
        value: 1200,
        suffix: "+",
        label: "Deliveries a year",
        hint: "Devices, injectables, and consumables.",
      },
      {
        value: 24,
        suffix: "/7",
        label: "Cold-chain monitoring",
        hint: "For temperature-sensitive products.",
      },
    ],
    capabilitiesIntro:
      "From port to treatment room, every step is controlled, tracked, and compliant — so what you ordered is exactly what arrives.",
    capabilities: [
      {
        icon: "warehouse",
        title: "Regional Warehousing",
        description:
          "Strategically located, climate-controlled storage for devices, injectables, and professional consumables.",
      },
      {
        icon: "snowflake",
        title: "Cold-Chain Handling",
        description:
          "Continuously monitored temperature control for sensitive biologics and skincare — from shelf to doorstep.",
      },
      {
        icon: "truck",
        title: "Clinic-Ready Delivery",
        description:
          "Deliveries coordinated with your schedule — including training-day and installation-day timing.",
      },
      {
        icon: "clipboard",
        title: "Stock Management",
        description:
          "Recurring-order and consumables planning so your shelves never run dry in the middle of a busy month.",
      },
      {
        icon: "shield",
        title: "Regulatory & Customs",
        description:
          "Import documentation, product registration, and customs clearance handled by our in-house team.",
      },
      {
        icon: "radar",
        title: "Order Tracking",
        description:
          "Visibility from dispatch to doorstep, with proactive updates at every stage of your order's journey.",
      },
    ],
    processIntro:
      "A supply chain you never have to chase — every order moves through the same disciplined cycle.",
    process: [
      {
        title: "Receive",
        description:
          "Products arrive from our brand partners and are inspected, logged, and stored to specification.",
      },
      {
        title: "Store",
        description:
          "Climate-controlled zones and monitored cold chain keep every SKU in perfect condition.",
      },
      {
        title: "Dispatch",
        description:
          "Orders are picked, packed, and routed — devices travel with installation scheduling attached.",
      },
      {
        title: "Deliver",
        description:
          "Clinic-ready handover, coordinated with training or setup wherever your schedule needs it.",
      },
    ],
    faqs: [
      {
        question: "Which countries do you deliver to?",
        answer:
          "We currently serve clinics across six countries in the GCC and wider Middle East from our Dubai hub. For locations outside our regular routes, contact us and we'll confirm options.",
      },
      {
        question: "How do you handle temperature-sensitive products?",
        answer:
          "Sensitive products stay in monitored cold-chain storage and travel in temperature-controlled packaging, with continuous logging from our shelf to your clinic.",
      },
      {
        question: "Can you manage recurring stock for our clinic?",
        answer:
          "Yes. We set up recurring-order programs for consumables and high-rotation SKUs, matched to your treatment volume so you reorder less and run out never.",
      },
      {
        question: "What happens if something arrives damaged?",
        answer:
          "Report it within 48 hours with photos and we'll arrange a replacement or claim immediately. Every shipment is insured and traceable end to end.",
      },
      {
        question: "Do you deliver large devices as well?",
        answer:
          "Yes — devices are delivered by our own team and timed with biomedical installation, so your equipment arrives and goes live in one coordinated visit.",
      },
    ],
  },
  {
    slug: "marketing-support",
    index: "04",
    name: "Marketing Support",
    titleLead: "Marketing",
    titleAccent: "Support.",
    tagline:
      "Campaigns, content, and events that fill your treatment rooms — powered by the brands you stock.",
    description:
      "Stocking a great brand is step one; getting patients asking for it by name is step two. Our marketing team co-creates campaigns, content, and events with partner clinics — so the brands you carry become the treatments your city talks about.",
    keywords: [
      "Campaigns",
      "Social Media",
      "Events",
      "Open Days",
      "Print & Branding",
      "Patient Education",
      "PR",
      "Content Creation",
    ],
    heroChips: ["Campaigns", "Events", "Content"],
    image: {
      src: "/glamorous-portrait.webp",
      alt: "Campaign imagery created for an aesthetic brand activation",
    },
    accent: "#e90c87",
    stats: [
      {
        value: 60,
        suffix: "+",
        label: "Campaigns a year",
        hint: "Across digital and offline channels.",
      },
      {
        value: 25,
        suffix: "+",
        label: "Events & open days",
        hint: "Clinic activations and exhibitions.",
      },
      {
        value: 12,
        suffix: "",
        label: "Brand launches",
        hint: "Supported in-market every year.",
      },
      {
        value: 8,
        suffix: "",
        label: "Global brands",
        hint: "Backed by our marketing team.",
      },
    ],
    capabilitiesIntro:
      "Partner clinics get a marketing team they didn't have to hire — plugged into every brand we represent.",
    capabilities: [
      {
        icon: "book",
        title: "Patient Education",
        description:
          "Leaflets, treatment guides, and in-clinic materials that turn patient curiosity into booked consultations.",
      },
      {
        icon: "social",
        title: "Social Media & Content",
        description:
          "Scroll-stopping assets, captions, and content calendars aligned to each brand's identity and your voice.",
      },
      {
        icon: "target",
        title: "Digital Campaigns",
        description:
          "Targeted advertising and landing pages that drive qualified treatment enquiries straight to your clinic.",
      },
      {
        icon: "print",
        title: "Print & Branding",
        description:
          "Brochures, roll-ups, and signage designed and produced to each brand's global standard.",
      },
      {
        icon: "sparkles",
        title: "Events & Activations",
        description:
          "Open days, masterclasses, and exhibition presence planned end to end — from invites to follow-ups.",
      },
      {
        icon: "rocket",
        title: "Launch Support",
        description:
          "New device or brand in your clinic? We build the launch buzz around you — PR, content, and campaign in one push.",
      },
    ],
    processIntro:
      "A simple rhythm keeps your marketing consistent — and tied to real bookings, not vanity metrics.",
    process: [
      {
        title: "Discover",
        description:
          "We learn your clinic's positioning, audience, capacity, and the brands you carry.",
      },
      {
        title: "Plan",
        description:
          "A campaign calendar is built around launches, seasons, and the gaps in your treatment diary.",
      },
      {
        title: "Create",
        description:
          "Assets, copy, and collateral are produced in brand-compliant style, localised for your market.",
      },
      {
        title: "Launch & measure",
        description:
          "Campaigns go live, and we report back on reach, engagement, and — most importantly — enquiries.",
      },
    ],
    faqs: [
      {
        question: "Is marketing support included when we stock your brands?",
        answer:
          "Partner clinics get access to our marketing support stack as part of the partnership. The exact scope depends on the brand and your plan — talk to us and we'll map it out.",
      },
      {
        question: "Do you manage social media for clinics?",
        answer:
          "We co-create: our team supplies brand-approved assets, content calendars, and campaign creative, while day-to-day posting stays with you — or with your agency, supported by us.",
      },
      {
        question: "Can you help us launch a new device or treatment?",
        answer:
          "Yes — launches are our favourite brief. We combine patient education, digital campaigns, PR, and an event or open day to put your new offering on the map fast.",
      },
      {
        question: "Do you cover both digital and print?",
        answer:
          "Both. From Instagram assets and ad creative to brochures, roll-ups, and in-clinic signage — all produced to the brand's global standard.",
      },
      {
        question: "How do we know it's working?",
        answer:
          "Every campaign closes with a report on reach, engagement, and enquiry volume. We review it with you and adjust the next cycle accordingly.",
      },
    ],
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((service) => service.slug !== slug);
}
