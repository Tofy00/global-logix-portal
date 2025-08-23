
import { useLanguage } from "@/components/LanguageProvider";
import { CategoryOption } from "@/types/catalog";

interface CategoryListProps {
  categories: CategoryOption[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryList = ({ categories, activeCategory, onCategoryChange }: CategoryListProps) => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default CategoryList;
