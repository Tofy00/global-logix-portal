
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/lovable-uploads/9f7fd030-fdb5-47ee-9731-453531e3bfd6.png')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-900/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t("home.hero.title")}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              {t("home.hero.subtitle")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Button
              size="lg"
              onClick={scrollToServices}
              className="text-base bg-secondary hover:bg-secondary/90"
            >
              {t("home.hero.cta")}
              <ArrowDownCircle className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-1 cursor-pointer animate-bounce"
          onClick={scrollToServices}
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
