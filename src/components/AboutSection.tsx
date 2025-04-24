import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, BoxesIcon, Boxes, CircleDashed, FileImage } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: t("home.about.years"),
      label: t("home.about.yearsText"),
      delay: 100,
    },
    {
      value: t("home.about.countries"),
      label: t("home.about.countriesText"),
      delay: 200,
    },
    {
      value: t("home.about.clients"),
      label: t("home.about.clientsText"),
      delay: 300,
    },
    {
      value: t("home.about.shipments"),
      label: t("home.about.shipmentsText"),
      delay: 400,
    },
  ];

  const features = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: t("home.about.offices"),
      description: t("home.about.officesText"),
    },
    {
      icon: <BoxesIcon className="h-10 w-10 text-primary" />,
      title: t("home.about.components"),
      description: t("home.about.componentsText"),
    },
    {
      icon: <CircleDashed className="h-10 w-10 text-primary" />,
      title: t("home.about.approach"),
      description: t("home.about.approachText"),
    },
  ];

  const handleOpenSupplyProgram = () => {
    window.open("/lovable-uploads/326a266b-1ec5-448b-980e-1870148cca4e.png", "_blank");
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.about.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              {t("home.about.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <Card className="h-full hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/60 dark:hover:shadow-primary/40 group card-glow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={stat.delay}>
              <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-primary/60 dark:hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 card-glow">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleOpenSupplyProgram}
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105"
            >
              <FileImage className="mr-2 h-4 w-4" />
              {t("home.about.viewSupplyProgram")}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
