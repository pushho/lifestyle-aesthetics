export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  image: { src: string; alt: string };
  sections: PostSection[];
};

const posts: Post[] = [
  {
    slug: "a-device-the-team-will-use",
    title: "Choose a device the team will actually use",
    excerpt:
      "The useful questions come after the spec sheet: who runs it on a full day, how long it sits in the diary, and who answers when it needs service.",
    category: "Devices",
    date: "2026-10-14",
    dateLabel: "14 October 2026",
    readTime: "6 min read",
    image: {
      src: "/cta-device.jpg",
      alt: "White aesthetic treatment device with a touchscreen and handpiece against a pink background",
    },
    sections: [
      {
        heading: "Start with the Tuesday afternoon",
        paragraphs: [
          "A device looks straightforward in a demonstration. The clinic has to live with it between demonstrations: a booked column, a practitioner who may not have been in the training, and a patient who wants to know what the appointment involves.",
          "Before comparing wavelengths and handpieces, name the appointment you expect this device to fill. If that appointment does not exist yet, the device is a project, not a purchase. Projects need an owner, a launch date, and a reason the front desk can explain.",
        ],
      },
      {
        heading: "Training is part of the machine",
        paragraphs: [
          "Ask who is trained on day one, and who is trained when a new therapist joins six months later. A single workshop is a start. The clinics that keep a device busy are the ones that can repeat the protocol without calling the person who attended the launch.",
          "Service matters in the same way. A device that has to leave the country for a repair is a gap in the diary. Ask where it is serviced, how long a typical visit takes, and what the clinic uses while it is unavailable.",
        ],
      },
      {
        heading: "Make the consultation match the technology",
        paragraphs: [
          "Patients book what they understand. If the consultation script still describes last year's menu, the new device will sit in the room while the old treatments fill the book.",
          "Write the explanation the team will actually say: what the appointment is for, how long it takes, and what the patient should expect afterwards. Then try it on the front desk before you try it on a campaign.",
        ],
      },
    ],
  },
  {
    slug: "build-the-peel-menu-first",
    title: "Build the peel menu before the first booking",
    excerpt:
      "A peel range works when the consultation, the downtime conversation, and the aftercare are decided before the product arrives in the clinic.",
    category: "Clinical peels",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    readTime: "5 min read",
    image: {
      src: "/facial-treatment.webp",
      alt: "Clinician in black scrubs performing a facial device treatment on a patient",
    },
    sections: [
      {
        heading: "Decide the ladder, not a single peel",
        paragraphs: [
          "Clinics get into trouble when a peel menu is a list of product names. Patients and the front desk need a ladder: a maintenance option, a step up, and a treatment that is only offered after a proper consultation.",
          "Name who each step is for, and who it is not for. That single distinction keeps the diary honest and stops a deep peel being booked into a lunch-hour slot.",
        ],
      },
      {
        heading: "Downtime is a scheduling decision",
        paragraphs: [
          "If a peel needs several days of recovery, the person who books the appointment has to know that before the patient is in the chair. Put the recovery window on the booking card, not only in the clinical notes.",
          "Aftercare belongs in the same place. A printed or written plan that leaves with the patient is more useful than a conversation they will half-remember in the car park.",
        ],
      },
      {
        heading: "Train the people who never perform the peel",
        paragraphs: [
          "Reception, coordinators, and the practitioner covering a colleague's list all speak for the menu. A short briefing for them is as important as the clinical training for the person holding the peel.",
          "When those conversations match, the menu feels deliberate. When they do not, patients hear three versions of the same treatment and trust none of them.",
        ],
      },
    ],
  },
  {
    slug: "training-that-is-still-useful",
    title: "Training that is still useful in month three",
    excerpt:
      "A workshop introduces a protocol. The clinics that keep it are the ones that give it an owner, a follow-up, and a place the team can find the notes.",
    category: "Education",
    date: "2026-07-18",
    dateLabel: "18 July 2026",
    readTime: "5 min read",
    image: {
      src: "/training-education.jpg",
      alt: "Clinician guiding a hands-on facial treatment during a training session",
    },
    sections: [
      {
        heading: "Name an owner before the day ends",
        paragraphs: [
          "Training fades when everyone attended and no one is responsible. Before the session closes, name the person who will answer questions in week two, and the person who will train the next hire.",
          "That owner does not have to be the most senior clinician. They have to be the person who will still be in the clinic when the manual is needed.",
        ],
      },
      {
        heading: "Book the follow-up while you are still in the room",
        paragraphs: [
          "A date in the diary beats a promise to 'circle back'. Put a short review on the calendar: what has been performed, what felt unclear, and which patients the protocol actually suited.",
          "Distributors can support that review. The clinic still has to show up with real appointments behind it, not a memory of the demonstration.",
        ],
      },
      {
        heading: "Keep the notes where the work happens",
        paragraphs: [
          "A slide deck in someone's inbox is not a protocol. The useful version is short, current, and stored where the team already looks: the treatment room folder, the shared drive they open every morning, or the card beside the device.",
          "If the notes only live with the person who went to the workshop, the protocol leaves when they do.",
        ],
      },
    ],
  },
  {
    slug: "adding-an-injectable",
    title: "Add an injectable without rearranging the diary",
    excerpt:
      "A new filler or biostimulator lands more cleanly when the clinic decides which appointments it belongs in, and what stays exactly as it is.",
    category: "Injectables",
    date: "2026-06-03",
    dateLabel: "3 June 2026",
    readTime: "5 min read",
    image: {
      src: "/spa-treatment-room.webp",
      alt: "Bright aesthetic treatment room with a white procedure chair and cabinetry",
    },
    sections: [
      {
        heading: "Place it next to something you already offer",
        paragraphs: [
          "The smoothest introductions sit beside an appointment the clinic already does well. A new product then has a consultation, a duration, and a practitioner, instead of needing a new column invented from nothing.",
          "Decide what it does not replace. Teams relax when they can see that Tuesday's existing list is still Tuesday's list.",
        ],
      },
      {
        heading: "Limit the first month on purpose",
        paragraphs: [
          "Offer the new injectable to a defined group of consultations first. A small start gives the team repetitions, and it gives you a set of notes before the treatment is on every menu card.",
          "Review those first cases with the people who performed them. Adjust the explanation, the booking length, or the aftercare before you widen it.",
        ],
      },
      {
        heading: "Stock follows the plan",
        paragraphs: [
          "Order for the appointments you have actually planned, not for the launch you hope will happen. A cupboard full of product the team is not booking is a storage problem, not a success.",
          "Tell your distributor the real first-month volume. A good partner would rather plan a second delivery than watch a clinic over-order on enthusiasm.",
        ],
      },
    ],
  },
  {
    slug: "introducing-a-new-treatment",
    title: "How a new treatment reaches the patient",
    excerpt:
      "Open days and campaigns work when they describe a treatment the clinical team can already perform, explain, and book.",
    category: "Practice",
    date: "2026-04-22",
    dateLabel: "22 April 2026",
    readTime: "4 min read",
    image: {
      src: "/knowledge-hub.jpg",
      alt: "Clinic coordinator working at a laptop in a bright consultation room",
    },
    sections: [
      {
        heading: "The consultation is the campaign",
        paragraphs: [
          "Patients meet a treatment in the chair long before they meet it on a poster. If the practitioner cannot describe it in a few clear sentences, no open day will fix that.",
          "Write those sentences with the clinical team, then use the same words in the invitation, the website, and the message the coordinator sends.",
        ],
      },
      {
        heading: "Invite people you can actually see",
        paragraphs: [
          "An open day is a series of conversations with a start and a finish. Cap the guest list at the number of proper consultations the team can hold, and leave time to book the ones who are ready.",
          "A full room that leaves without a next appointment is an event. A smaller room that leaves with dates in the diary is a launch.",
        ],
      },
      {
        heading: "Show the work you are prepared to repeat",
        paragraphs: [
          "Photographs and stories should come from treatments the clinic intends to keep offering. A one-off demonstration creates demand the diary cannot meet.",
          "Wait until the protocol, the aftercare, and the booking script are steady. Then the marketing has something true to point at.",
        ],
      },
    ],
  },
  {
    slug: "questions-for-your-distributor",
    title: "Questions worth asking before you partner",
    excerpt:
      "Stock, training, paperwork, and the person who picks up the phone when a device needs attention. Have that conversation before the first order.",
    category: "Partnership",
    date: "2026-02-11",
    dateLabel: "11 February 2026",
    readTime: "5 min read",
    image: {
      src: "/about/dubai-skyline.jpg",
      alt: "Dubai skyline at dusk, where Lifestyle Aesthetics is headquartered",
    },
    sections: [
      {
        heading: "Who supports this in your city",
        paragraphs: [
          "A brand can be excellent and still be a poor fit if nobody nearby can train the team or service the device. Ask where the stock is held, who visits the clinic, and which cities that person actually covers.",
          "If the answer is a head office in another country and a promise to fly someone in, decide whether that matches the way your clinic works on an ordinary week.",
        ],
      },
      {
        heading: "What happens after the first order",
        paragraphs: [
          "The first delivery is the easy part. Ask about the second order, the training for a new joiner, and the paperwork your clinic needs to keep on file.",
          "Ask for a named contact. A shared inbox is fine for catalogues. It is a poor answer when a treatment room is waiting.",
        ],
      },
      {
        heading: "Whether the partnership matches the menu",
        paragraphs: [
          "A distributor should be able to say which products suit the appointments you already run, and which ones would need a different kind of clinic. That honesty saves both sides a launch that never becomes a habit.",
          "Lifestyle Aesthetics works with licensed clinics from Dubai across the UAE, Qatar, Bahrain, Oman, Egypt, and Kuwait. If you are weighing a partnership, bring the questions above. They are the right ones.",
        ],
      },
    ],
  },
];

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const others = getAllPosts().filter((post) => post.slug !== slug);
  const sameCategory = others.filter((post) => post.category === current.category);
  const rest = others.filter((post) => post.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}
