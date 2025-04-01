
import { useLanguage } from "@/components/LanguageProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface AvailabilityFilterProps {
  inStockOnly: boolean;
  onStockFilterChange: (checked: boolean) => void;
}

const AvailabilityFilter = ({ inStockOnly, onStockFilterChange }: AvailabilityFilterProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default AvailabilityFilter;
