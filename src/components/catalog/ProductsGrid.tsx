
import { useLanguage } from "@/components/LanguageProvider";
import ProductCard from "./ProductCard";
import { Component } from "@/types/catalog";

interface ProductsGridProps {
  products: Component[];
  viewMode: "grid" | "list";
}

const ProductsGrid = ({ products, viewMode }: ProductsGridProps) => {
  const { t } = useLanguage();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">{t("catalog.noResults")}</h3>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
      }
    >
      {products.map((component, idx) => (
        <ProductCard
          key={component.id}
          component={component}
          viewMode={viewMode}
          index={idx}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
