import { EducationHub } from "./components/EducationHub";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurSolutions } from "./components/OurSolutions";
import { PartnerCta } from "./components/PartnerCta";
import { Reviews } from "./components/Reviews";
import { TrainingSupport } from "./components/TrainingSupport";
import { WhoWeAre } from "./components/WhoWeAre";
import { WhyPartner } from "./components/WhyPartner";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <OurSolutions />
        <WhyPartner />
        <TrainingSupport />
        <EducationHub />
        <Reviews />
        <PartnerCta />
      </main>
      <Footer />
    </div>
  );
}
