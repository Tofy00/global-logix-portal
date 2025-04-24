import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { SupplyProgramButton } from "@/components/SupplyProgramButton";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.about.title")}</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground">{t("home.about.subtitle")}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={300}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.offices")}</h3>
              <p className="text-muted-foreground">{t("home.about.officesText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.components")}</h3>
              <p className="text-muted-foreground">{t("home.about.componentsText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.approach")}</h3>
              <p className="text-muted-foreground">{t("home.about.approachText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.years")}</h3>
              <p className="text-muted-foreground">{t("home.about.yearsText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.countries")}</h3>
              <p className="text-muted-foreground">{t("home.about.countriesText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.clients")}</h3>
              <p className="text-muted-foreground">{t("home.about.clientsText")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t("home.about.shipments")}</h3>
              <p className="text-muted-foreground">{t("home.about.shipmentsText")}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Add the SupplyProgramButton at the end of the section */}
      <div className="flex justify-center">
        <ScrollReveal>
          <SupplyProgramButton />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
