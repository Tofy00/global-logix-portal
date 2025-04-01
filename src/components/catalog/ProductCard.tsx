
import { Component } from "@/types/catalog";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

interface ProductCardProps {
  component: Component;
  viewMode: "grid" | "list";
  index: number;
}

const ProductCard = ({ component, viewMode, index }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <ScrollReveal key={component.id} delay={index * 50}>
      <Card
        className={`overflow-hidden transition-shadow hover:shadow-md ${
          viewMode === "list" ? "flex flex-col sm:flex-row" : ""
        }`}
      >
        <div className={viewMode === "list" ? "sm:w-1/3 lg:w-1/4" : ""}>
          <div className="aspect-square bg-accent/50 flex items-center justify-center p-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium text-xl">
              {component.name.substring(0, 2)}
            </div>
          </div>
        </div>
        <div
          className={
            viewMode === "list" 
              ? "sm:w-2/3 lg:w-3/4 flex flex-col flex-grow" 
              : "flex flex-col flex-grow"
          }
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start gap-3">
              <CardTitle className="truncate max-w-[70%]">
                {component.name}
              </CardTitle>
              <Badge
                variant={component.inStock ? "default" : "secondary"}
                className="shrink-0 whitespace-nowrap self-start mt-1"
              >
                {component.inStock
                  ? t("catalog.inStock")
                  : t("catalog.outOfStock")}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="py-2">
            <div className="min-h-[4.5rem]">
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {component.description}
              </p>
            </div>
            <p className="text-lg font-bold">${component.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter
            className={`flex flex-wrap gap-2 ${
              viewMode === "list"
                ? "justify-end"
                : "justify-between"
            }`}
          >
            <Button variant="outline" className="whitespace-nowrap">
              {t("catalog.moreDetails")}
            </Button>
            <Button
              variant="default"
              className="whitespace-nowrap"
              disabled={!component.inStock}
            >
              {t("catalog.addToCart")}
            </Button>
          </CardFooter>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export default ProductCard;
