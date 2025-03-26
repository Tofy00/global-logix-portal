
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, FileCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "logistics",
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: t("home.services.efficientLogistics.title"),
      description: t("home.services.efficientLogistics.description"),
    },
    {
      id: "quality",
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t("home.services.qualityControl.title"),
      description: t("home.services.qualityControl.description"),
    },
    {
      id: "customs",
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: t("home.services.customClearance.title"),
      description: t("home.services.customClearance.description"),
    },
    {
      id: "delivery",
      icon: <Package className="h-8 w-8 text-primary" />,
      title: t("home.services.doorToDoor.title"),
      description: t("home.services.doorToDoor.description"),
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={300 + idx * 100}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
                <CardHeader className="pb-2">
                  <div className="mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                    {t("common.readMore")}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
