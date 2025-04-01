
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FilterSidebar from "@/components/catalog/FilterSidebar";
import SearchToolbar from "@/components/catalog/SearchToolbar";
import CategoryTabs from "@/components/catalog/CategoryTabs";
import ProductsGrid from "@/components/catalog/ProductsGrid";
import { components } from "@/data/componentData";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

const Catalog = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  // Get categories and sort options with translations
  const categories = [
    { id: "all", label: t("catalog.all") },
    { id: "microcontrollers", label: t("catalog.category1") },
    { id: "transistors", label: t("catalog.category2") },
    { id: "resistors", label: t("catalog.category3") },
    { id: "capacitors", label: t("catalog.category4") },
    { id: "inductors", label: t("catalog.category5") },
  ];
  
  const sortOptions = [
    { id: "nameAsc", label: t("catalog.nameAsc") },
    { id: "nameDesc", label: t("catalog.nameDesc") },
    { id: "priceAsc", label: t("catalog.priceAsc") },
    { id: "priceDesc", label: t("catalog.priceDesc") },
  ];

  // Use custom hook for filtering and sorting
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    inStockOnly,
    setInStockOnly,
    sortOption,
    setSortOption,
    filteredComponents
  } = useCatalogFilters({ components });

  // Handler functions
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("catalog.title")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              {t("catalog.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={toggleFilters}
            className="w-full flex items-center justify-between"
          >
            <span className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              {t("catalog.filters")}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar / Filters */}
          <FilterSidebar 
            categories={categories}
            activeCategory={activeCategory}
            inStockOnly={inStockOnly}
            onCategoryChange={handleCategoryChange}
            onStockFilterChange={setInStockOnly}
            showFilters={showFilters}
          />

          {/* Main Content */}
          <div className="md:w-3/4 space-y-6">
            {/* Search and Toolbar */}
            <SearchToolbar
              searchQuery={searchQuery}
              sortOption={sortOption}
              viewMode={viewMode}
              sortOptions={sortOptions}
              onSearchChange={handleSearchChange}
              onSortChange={setSortOption}
              onViewModeChange={setViewMode}
            />

            {/* Tabs for categories on desktop */}
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Components List/Grid */}
            <ProductsGrid 
              products={filteredComponents} 
              viewMode={viewMode} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
