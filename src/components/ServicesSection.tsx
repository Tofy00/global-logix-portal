
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Headphones, BarChart3, Users, Award, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "originalComponents",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: t("home.services.originalComponents.title"),
      description: t("home.services.originalComponents.description"),
    },
    {
      id: "technicalSupport",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: t("home.services.technicalSupport.title"),
      description: t("home.services.technicalSupport.description"),
    },
    {
      id: "flexiblePricing",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t("home.services.flexiblePricing.title"),
      description: t("home.services.flexiblePricing.description"),
    },
    {
      id: "customApproach",
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("home.services.customApproach.title"),
      description: t("home.services.customApproach.description"),
    },
    {
      id: "experience",
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t("home.services.experience.title"),
      description: t("home.services.experience.description"),
    },
    {
      id: "fastDelivery",
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: t("home.services.fastDelivery.title"),
      description: t("home.services.fastDelivery.description"),
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.services.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              {t("home.services.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={300 + idx * 100}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group dark:border-primary-800/30 border-primary-200/80">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
                <CardHeader className="pb-2">
                  <div className="mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
