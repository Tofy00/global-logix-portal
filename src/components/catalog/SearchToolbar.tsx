
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, LayoutGrid, List } from "lucide-react";
import { SortOption } from "@/types/catalog";

interface SearchToolbarProps {
  searchQuery: string;
  sortOption: string;
  viewMode: "grid" | "list";
  sortOptions: SortOption[];
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (value: string) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
}

const SearchToolbar = ({
  searchQuery,
  sortOption,
  viewMode,
  sortOptions,
  onSearchChange,
  onSortChange,
  onViewModeChange
}: SearchToolbarProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("catalog.search")}
          value={searchQuery}
          onChange={onSearchChange}
          className="pl-9"
        />
      </div>
      <div className="flex space-x-2">
        <select
          className="bg-background border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
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
            onClick={() => onViewModeChange("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchToolbar;
