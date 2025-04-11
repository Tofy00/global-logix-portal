
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContent = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/lovable-uploads/9f7fd030-fdb5-47ee-9731-453531e3bfd6.png')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Darker overlay for better text readability, regardless of theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
              {t("home.hero.title")}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-sm">
              {t("home.hero.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Animated arrow down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="cursor-pointer text-white/80 hover:text-white transition-colors"
          onClick={scrollToContent}
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
