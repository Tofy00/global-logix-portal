
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryOption } from "@/types/catalog";

interface CategoryTabsProps {
  categories: CategoryOption[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
}

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <Tabs
      value={activeCategory}
      onValueChange={onCategoryChange}
      className="hidden md:block"
    >
      <TabsList className="w-full justify-start">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CategoryTabs;
