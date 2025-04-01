
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryOption } from "@/types/catalog";

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
          <div>
            <h3 className="font-medium mb-3">{t("catalog.categories")}</h3>
            <div className="space-y-1.5">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">{t("catalog.availability")}</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={inStockOnly}
                onCheckedChange={(checked) => onStockFilterChange(!!checked)}
              />
              <Label htmlFor="inStock">{t("catalog.inStock")}</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
