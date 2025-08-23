
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Определим тип для PaginationLink
interface PaginationLinkProps {
  href?: string; 
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
  "aria-current"?: "page";
  disabled?: boolean; // Добавляем поддержку disabled для совместимости
  onClick?: () => void; // Добавляем поддержку onClick
}

// Предполагаем, что компонент PaginationLink выглядит так:
const PaginationLink = ({
  href,
  isActive,
  children,
  className,
  onClick,
  ...props
}: PaginationLinkProps) => {
  // Компонент должен обрабатывать disabled как prop
  const isDisabled = props.disabled === true;
  
  // Используем правильный компонент в зависимости от того, disabled он или нет
  if (isDisabled) {
    return (
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-md text-sm border border-input bg-background text-muted-foreground opacity-50 cursor-not-allowed ${className}`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }
  
  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      // Display all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Complex logic for more than 7 pages
      if (currentPage <= 3) {
        // Near the beginning
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // In the middle
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2">
            {page}
          </span>
        ) : (
          <PaginationLink
            key={page}
            onClick={() => onPageChange(Number(page))}
            className={currentPage === page ? "active" : ""}
            aria-current={currentPage === page ? "page" : undefined}
            disabled={currentPage === page}
          >
            {page}
          </PaginationLink>
        )
      )}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProductPagination;
