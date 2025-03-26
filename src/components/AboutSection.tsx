
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Globe, Users, Truck } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      id: "years",
      value: t("home.about.years"),
      label: t("home.about.yearsText"),
      icon: <Heart className="h-8 w-8 text-primary" />,
    },
    {
      id: "countries",
      value: t("home.about.countries"),
      label: t("home.about.countriesText"),
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      id: "clients",
      value: t("home.about.clients"),
      label: t("home.about.clientsText"),
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      id: "shipments",
      value: t("home.about.shipments"),
      label: t("home.about.shipmentsText"),
      icon: <Truck className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("home.about.title")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground text-lg mb-4">
                {t("home.about.subtitle")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mb-6">
                {t("home.about.description")}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, idx) => (
                <ScrollReveal key={stat.id} delay={400 + idx * 100}>
                  <div className="flex flex-col items-center p-4 bg-accent/50 rounded-lg shadow-sm">
                    <div className="p-3 rounded-full bg-accent mb-3">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal variant="right" className="lg:w-1/2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-90"></div>
              <img
                src="/lovable-uploads/9f7fd030-fdb5-47ee-9731-453531e3bfd6.png"
                alt="Global Logistics"
                className="w-full h-full object-cover object-center mix-blend-overlay"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-primary ml-1"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
