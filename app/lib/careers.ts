export type CareerRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
};

export const careerRoles: CareerRole[] = [
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Commercial",
    location: "Dubai, UAE",
    type: "Full-time",
    summary:
      "Find and manage clinic accounts across the UAE. The role covers product conversations, orders, and the relationship after the first sale.",
  },
  {
    slug: "clinical-education-specialist",
    title: "Clinical Education Specialist",
    department: "Education",
    location: "UAE & GCC",
    type: "Full-time",
    summary:
      "Train practitioners on the devices and protocols we distribute. The work is clinic visits, workshops, and follow-up after training.",
  },
  {
    slug: "marketing-coordinator",
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    summary:
      "Plan product launches and produce the materials clinics use to learn about our brands.",
  },
];

export const openApplication = {
  slug: "open-application",
  title: "Open application",
} as const;

export function careerChoiceTitle(slug: string) {
  if (slug === openApplication.slug) return openApplication.title;
  return careerRoles.find((role) => role.slug === slug)?.title ?? "";
}

export function isCareerChoice(slug: string) {
  return careerChoiceTitle(slug).length > 0;
}
