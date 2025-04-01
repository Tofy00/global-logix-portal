
import { useState, useEffect } from "react";
import { Component } from "@/types/catalog";

interface UseCatalogFiltersProps {
  components: Component[];
  initialCategory?: string;
  initialInStockOnly?: boolean;
  initialSortOption?: string;
  initialPage?: number;
  itemsPerPage?: number;
}

export const useCatalogFilters = ({
  components,
  initialCategory = "all",
  initialInStockOnly = false,
  initialSortOption = "nameAsc",
  initialPage = 1,
  itemsPerPage = 6
}: UseCatalogFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [inStockOnly, setInStockOnly] = useState(initialInStockOnly);
  const [sortOption, setSortOption] = useState(initialSortOption);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [paginatedComponents, setPaginatedComponents] = useState<Component[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, inStockOnly, sortOption]);

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
    
    // Calculate total pages
    setTotalPages(Math.max(1, Math.ceil(filtered.length / itemsPerPage)));
  }, [searchQuery, activeCategory, inStockOnly, sortOption, components, itemsPerPage]);

  // Apply pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedComponents(filteredComponents.slice(startIndex, endIndex));
  }, [filteredComponents, currentPage, itemsPerPage]);

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

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    inStockOnly,
    setInStockOnly,
    sortOption,
    setSortOption,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredComponents,
    paginatedComponents
  };
};
