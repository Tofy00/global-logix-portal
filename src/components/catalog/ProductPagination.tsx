
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageButtonProps {
  page: number;
  isActive?: boolean;
  onClick: (page: number) => void;
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const PageButton = ({ page, isActive, onClick, size = "default", children }: PageButtonProps) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size={size}
      onClick={() => onClick(page)}
      className={cn(
        "mx-1",
        isActive && "pointer-events-none"
      )}
    >
      {children || page}
    </Button>
  );
};

interface PaginationControlButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const PaginationControlButton = ({ onClick, className, disabled, children }: PaginationControlButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      className={cn("mx-1", className)}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: ProductPaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Create array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    if (currentPage > 3) {
      pages.push(1);
    }
    
    // Show ellipsis if needed
    if (currentPage > 4) {
      pages.push(-1); // -1 represents ellipsis
    }
    
    // Show pages around current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Show ellipsis if needed
    if (currentPage < totalPages - 3) {
      pages.push(-2); // -2 represents ellipsis
    }
    
    // Always show last page if there are multiple pages
    if (totalPages > 1 && currentPage < totalPages - 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <div className={cn("flex items-center justify-center my-8", className)}>
      <div className="flex flex-wrap items-center justify-center">
        <PaginationControlButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </PaginationControlButton>

        {getPageNumbers().map((pageNum, i) => {
          if (pageNum === -1 || pageNum === -2) {
            return (
              <span key={`ellipsis-${i}`} className="mx-2">
                ...
              </span>
            );
          }
          return (
            <PageButton
              key={pageNum}
              page={pageNum}
              isActive={pageNum === currentPage}
              onClick={handlePageChange}
            />
          );
        })}

        <PaginationControlButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </PaginationControlButton>
      </div>
    </div>
  );
};

export default ProductPagination;
