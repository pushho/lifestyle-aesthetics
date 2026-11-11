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
      "Grow clinic partnerships across the UAE. You already know aesthetic practices, and you can talk products, protocols, and long-term supply with the same ease.",
  },
  {
    slug: "clinical-education-specialist",
    title: "Clinical Education Specialist",
    department: "Education",
    location: "UAE & GCC",
    type: "Full-time",
    summary:
      "Train practitioners on the devices and protocols we distribute. Clinic days, workshops, and the follow-up that keeps a new treatment on the menu.",
  },
  {
    slug: "marketing-coordinator",
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    summary:
      "Shape how brands are introduced to clinics: launches, education materials, and the stories that travel with the portfolio.",
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
