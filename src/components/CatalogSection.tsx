import { Cpu, HardDrive, Zap, Wifi, Thermometer, Settings } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";

const CatalogSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Cpu,
      title: t("home.catalog.processors.title"),
      description: t("home.catalog.processors.description"),
      color: "from-blue-500/20 to-purple-500/20 border-blue-500/30"
    },
    {
      icon: HardDrive,
      title: t("home.catalog.memory.title"),
      description: t("home.catalog.memory.description"),
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    },
    {
      icon: Zap,
      title: t("home.catalog.power.title"),
      description: t("home.catalog.power.description"),
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30"
    },
    {
      icon: Wifi,
      title: t("home.catalog.wireless.title"),
      description: t("home.catalog.wireless.description"),
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
    },
    {
      icon: Thermometer,
      title: t("home.catalog.sensors.title"),
      description: t("home.catalog.sensors.description"),
      color: "from-violet-500/20 to-pink-500/20 border-violet-500/30"
    },
    {
      icon: Settings,
      title: t("home.catalog.passive.title"),
      description: t("home.catalog.passive.description"),
      color: "from-gray-500/20 to-slate-500/20 border-gray-500/30"
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.catalog.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("home.catalog.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`p-6 rounded-xl border bg-gradient-to-br ${category.color} hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-background/80 group-hover:bg-background transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;