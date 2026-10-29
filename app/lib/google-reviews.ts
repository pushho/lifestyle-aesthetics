export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  author_url?: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  maps_url?: string;
  reviews: GoogleReview[];
};

export type ReviewCard = {
  key: string;
  name: string;
  photo?: string;
  initials: string;
  subtitle: string;
  rating: number;
  quote: string;
  href?: string;
};

export const GOOGLE_REVIEWS: GoogleReviewsData = {
  rating: 4.9,
  total: 48,
  maps_url: "https://www.google.com/maps",
  reviews: [
    {
      author_name: "Dr. Sara Al Mansoori",
      rating: 5,
      relative_time_description: "2 months ago",
      text: "Lifestyle Aesthetics made it straightforward to bring Hyalure into our practice. Training was clear, supply is reliable, and their team understands how a clinic actually runs.",
    },
    {
      author_name: "Omar Haddad",
      rating: 5,
      relative_time_description: "3 months ago",
      text: "From device installation to ongoing maintenance, the support has been consistent. Our practitioners felt confident after the workshops, and patients noticed the difference.",
    },
    {
      author_name: "Dr. Layla Farouk",
      rating: 5,
      relative_time_description: "4 months ago",
      text: "We needed a partner who could cover injectables, peels, and devices without fragmenting our vendors. Lifestyle Aesthetics became that single, trusted relationship.",
    },
    {
      author_name: "Noura Al Ketbi",
      rating: 5,
      relative_time_description: "5 months ago",
      text: "Responsive team and excellent product knowledge. The orientation sessions helped our staff feel ready before the first patient treatment.",
    },
  ],
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function toReviewCards(reviews: GoogleReview[]): ReviewCard[] {
  return reviews.map((review, index) => ({
    key: `${review.author_name}-${index}`,
    name: review.author_name,
    photo: review.profile_photo_url,
    initials: getInitials(review.author_name),
    subtitle: review.relative_time_description,
    rating: review.rating,
    quote: review.text,
    href: review.author_url,
  }));
}

export function useGoogleReviews(): GoogleReviewsData {
  return GOOGLE_REVIEWS;
}
