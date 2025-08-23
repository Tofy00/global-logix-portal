import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Zap, Shield, Globe, Truck, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CatalogSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Cpu,
      title: "Микроконтроллеры и процессоры",
      description: "Современные решения для embedded-систем от ведущих производителей",
      brands: ["Texas Instruments", "STMicroelectronics", "NXP", "Microchip"],
      count: "1200+"
    },
    {
      icon: Zap,
      title: "Силовая электроника",
      description: "Транзисторы, диоды, стабилизаторы напряжения для энергетических решений",
      brands: ["Infineon", "ON Semiconductor", "Vishay", "ROHM"],
      count: "800+"
    },
    {
      icon: Shield,
      title: "Защитные компоненты",
      description: "Предохранители, варисторы, TVS-диоды для защиты цепей",
      brands: ["Littelfuse", "Bourns", "EPCOS", "Murata"],
      count: "500+"
    },
    {
      icon: Globe,
      title: "RF и беспроводные модули",
      description: "Решения для IoT, WiFi, Bluetooth, LoRa и других протоколов",
      brands: ["Espressif", "u-blox", "Nordic", "Silicon Labs"],
      count: "400+"
    },
    {
      icon: Truck,
      title: "Автомобильная электроника",
      description: "Компоненты для автомобильной промышленности с сертификацией AEC-Q",
      brands: ["Bosch", "Continental", "Denso", "Delphi"],
      count: "600+"
    },
    {
      icon: Award,
      title: "Промышленные датчики",
      description: "Высокоточные датчики для промышленной автоматизации",
      brands: ["Honeywell", "Sensirion", "Bosch", "TE Connectivity"],
      count: "300+"
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Каталог компонентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Более 3800 наименований электронных компонентов от ведущих мировых производителей. 
              Гарантия оригинальности и быстрая доставка в любую точку России.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {category.count} позиций
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground/80 mb-3">Ключевые бренды:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand, brandIndex) => (
                        <Badge 
                          key={brandIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1 hover:bg-primary/10 transition-colors"
                        >
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Посмотреть каталог
                    <Truck className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Не нашли нужный компонент?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Мы поможем найти и поставить любые электронные компоненты под заказ. 
                Связывайтесь с нашими экспертами для индивидуального решения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Запросить компонент
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Скачать полный каталог
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CatalogSection;