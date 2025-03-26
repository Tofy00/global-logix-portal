
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter, LayoutGrid, List, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Component {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
  image?: string;
}

const Catalog = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState("nameAsc");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);

  // Mock data
  const components: Component[] = [
    {
      id: "comp1",
      name: "ATmega328P",
      category: "microcontrollers",
      price: 2.5,
      description: "8-bit AVR microcontroller with 32KB flash memory",
      inStock: true,
    },
    {
      id: "comp2",
      name: "ESP32-WROOM-32",
      category: "microcontrollers",
      price: 4.8,
      description: "Powerful, generic Wi-Fi+BT+BLE MCU module",
      inStock: true,
    },
    {
      id: "comp3",
      name: "BC547",
      category: "transistors",
      price: 0.1,
      description: "NPN general purpose transistor",
      inStock: true,
    },
    {
      id: "comp4",
      name: "2N2222",
      category: "transistors",
      price: 0.15,
      description: "NPN switching transistor",
      inStock: false,
    },
    {
      id: "comp5",
      name: "10K Ohm",
      category: "resistors",
      price: 0.02,
      description: "1/4W 5% tolerance resistor",
      inStock: true,
    },
    {
      id: "comp6",
      name: "100 uF",
      category: "capacitors",
      price: 0.3,
      description: "Electrolytic capacitor, 25V",
      inStock: true,
    },
    {
      id: "comp7",
      name: "10 uH",
      category: "inductors",
      price: 0.25,
      description: "Radial lead inductor",
      inStock: false,
    },
    {
      id: "comp8",
      name: "STM32F103C8T6",
      category: "microcontrollers",
      price: 3.9,
      description: "ARM Cortex-M3 microcontroller",
      inStock: true,
    },
  ];

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

  // Filter components based on search, category, and in-stock status
  useEffect(() => {
    let filtered = [...components];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (component) =>
          component.name.toLowerCase().includes(query) ||
          component.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (component) => component.category === activeCategory
      );
    }

    // Filter by stock
    if (inStockOnly) {
      filtered = filtered.filter((component) => component.inStock);
    }

    // Sort components
    filtered = sortComponents(filtered, sortOption);

    setFilteredComponents(filtered);
  }, [searchQuery, activeCategory, inStockOnly, sortOption]);

  // Sort function
  const sortComponents = (
    components: Component[],
    sortOption: string
  ): Component[] => {
    const sortedComponents = [...components];

    switch (sortOption) {
      case "nameAsc":
        return sortedComponents.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return sortedComponents.sort((a, b) => b.name.localeCompare(a.name));
      case "priceAsc":
        return sortedComponents.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return sortedComponents.sort((a, b) => b.price - a.price);
      default:
        return sortedComponents;
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
  };

  // Toggle filter panel on mobile
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
          <div
            className={`md:w-1/4 space-y-6 ${
              showFilters ? "block" : "hidden md:block"
            }`}
          >
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
                        onClick={() => handleCategoryChange(category.id)}
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
                      onCheckedChange={(checked) => setInStockOnly(!!checked)}
                    />
                    <Label htmlFor="inStock">{t("catalog.inStock")}</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 space-y-6">
            {/* Search and Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t("catalog.search")}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-9"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  className="bg-background border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="" disabled>
                    {t("catalog.sort")}
                  </option>
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="flex border rounded-md overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs for categories on desktop */}
            <Tabs
              value={activeCategory}
              onValueChange={handleCategoryChange}
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

            {/* Components List/Grid */}
            {filteredComponents.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredComponents.map((component, idx) => (
                  <ScrollReveal key={component.id} delay={idx * 50}>
                    <Card
                      className={`overflow-hidden h-full hover:shadow-md transition-shadow ${
                        viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                      }`}
                    >
                      <div
                        className={
                          viewMode === "list" ? "sm:w-1/3 lg:w-1/4" : ""
                        }
                      >
                        <div className="aspect-square bg-accent/50 flex items-center justify-center p-4">
                          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium text-xl">
                            {component.name.substring(0, 2)}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          viewMode === "list" ? "sm:w-2/3 lg:w-3/4 flex flex-col" : ""
                        }
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{component.name}</CardTitle>
                            <Badge
                              variant={component.inStock ? "default" : "secondary"}
                            >
                              {component.inStock
                                ? t("catalog.inStock")
                                : t("catalog.outOfStock")}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {component.description}
                          </p>
                          <p className="text-lg font-bold">${component.price.toFixed(2)}</p>
                        </CardContent>
                        <CardFooter
                          className={`flex ${
                            viewMode === "list"
                              ? "justify-end mt-auto"
                              : "justify-between"
                          }`}
                        >
                          <Button variant="outline">
                            {t("catalog.moreDetails")}
                          </Button>
                          <Button
                            variant="default"
                            className="ml-2"
                            disabled={!component.inStock}
                          >
                            {t("catalog.addToCart")}
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">{t("catalog.noResults")}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
