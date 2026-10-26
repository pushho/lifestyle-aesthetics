import { EducationHub } from "./components/EducationHub";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurSolutions } from "./components/OurSolutions";
import { PartnerCta } from "./components/PartnerCta";
import { TrainingSupport } from "./components/TrainingSupport";
import { WhoWeAre } from "./components/WhoWeAre";
import { WhyPartner } from "./components/WhyPartner";

export default function Home() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <OurSolutions />
        <WhyPartner />
        <TrainingSupport />
        <EducationHub />
        <PartnerCta />
      </main>
      <Footer />
    </div>
  );
}
