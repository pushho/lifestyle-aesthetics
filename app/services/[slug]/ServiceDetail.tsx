import { notFound } from "next/navigation";
import { CapabilitiesGrid } from "../../components/services/CapabilitiesGrid";
import { ProcessSteps } from "../../components/services/ProcessSteps";
import { ServiceCta } from "../../components/services/ServiceCta";
import { ServiceFaq } from "../../components/services/ServiceFaq";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceSwitcher } from "../../components/services/ServiceSwitcher";
import { StatsBand } from "../../components/services/StatsBand";
import { getAllServices, getOtherServices, getServiceBySlug } from "../../lib/services";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} all={getAllServices()} />
      <StatsBand service={service} />
      <CapabilitiesGrid service={service} />
      <ProcessSteps service={service} />
      <ServiceFaq service={service} />
      <ServiceSwitcher services={getOtherServices(service.slug)} />
      <ServiceCta service={service} />
    </>
  );
}
