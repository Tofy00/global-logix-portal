
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryOption } from "@/types/catalog";
import CategoryList from "./CategoryList";
import AvailabilityFilter from "./AvailabilityFilter";

interface FilterSidebarProps {
  categories: CategoryOption[];
  activeCategory: string;
  inStockOnly: boolean;
  onCategoryChange: (categoryId: string) => void;
  onStockFilterChange: (checked: boolean) => void;
  showFilters?: boolean;
}

const FilterSidebar = ({
  categories,
  activeCategory,
  inStockOnly,
  onCategoryChange,
  onStockFilterChange,
  showFilters = true
}: FilterSidebarProps) => {
  const { t } = useLanguage();

  return (
    <div className={`md:w-1/4 space-y-6 ${showFilters ? "block" : "hidden md:block"}`}>
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle>{t("catalog.filters")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CategoryList 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />

          <AvailabilityFilter
            inStockOnly={inStockOnly}
            onStockFilterChange={onStockFilterChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
