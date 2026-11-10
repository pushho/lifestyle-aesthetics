import Link from "next/link";
import { SolutionCard } from "./SolutionCard";

const solutions = [
  {
    title: "Aesthetic Devices",
    description:
      "Clinic-grade lasers, RF, and treatment platforms with installation and ongoing support.",
    href: "/products?brand=zimmer#catalogue",
    image: {
      src: "/assets/treatment-machine.webp",
      alt: "Aesthetic treatment device from the Lifestyle Aesthetics catalogue",
      fit: "cover" as const,
    },
  },
  {
    title: "Injectables",
    description:
      "Clinically trusted fillers and biostimulators for volume, contour, and revitalisation.",
    href: "/products?brand=hyalure#catalogue",
    image: {
      src: "/products/mitelier/mitelier.png",
      alt: "Professional injectable products for aesthetic clinics",
      fit: "contain" as const,
    },
  },
  {
    title: "Professional Skincare",
    description:
      "Science-backed cosmeceuticals and clinical peels for professional treatment protocols.",
    href: "/#brands",
    image: {
      src: "/brands/janssen/ampoules.jpg",
      alt: "Professional skincare products for aesthetic practices",
      fit: "cover" as const,
    },
  },
] as const;

export function OurSolutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-20"
    >
      <div className="relative mx-auto grid max-w-430 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-12 xl:gap-16 xl:px-16">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Our Solutions
          </p>

          <h2
            className="mt-4 text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-foreground font-semibold"
          >
            A Complete Aesthetic Portfolio{" "}
            <span className="text-primary">for Your Practice</span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-secondary sm:text-[16px]">
            From clinic-grade devices and injectables to professional skincare,
            we supply the technologies and products aesthetic practices need —
            with training and support behind every line.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Discover Our Solutions
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 [perspective:1000px]">
          {solutions.map((solution, index) => (
            <li key={solution.title} className="[transform-style:preserve-3d]">
              <SolutionCard {...solution} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
