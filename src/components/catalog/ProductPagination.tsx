
import { useLanguage } from "@/components/LanguageProvider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) => {
  const { t } = useLanguage();

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Generate page numbers to display (show maximum 5 pages)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    // If we have 5 or fewer pages, show all of them
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If we have more than 5 pages, show a window around the current page
      if (currentPage <= 3) {
        // Near the start, show 1, 2, 3, 4, ... lastPage
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end, show 1, ... lastPage-3, lastPage-2, lastPage-1, lastPage
        pageNumbers.push(1);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // In the middle, show 1, ... currentPage-1, currentPage, currentPage+1, ... lastPage
        pageNumbers.push(1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {getPageNumbers().map((page, i, array) => (
          <PaginationItem key={page}>
            {/* If there's a gap between numbers, show ellipsis */}
            {i > 0 && page - array[i - 1] > 1 ? (
              <>
                <PaginationItem>
                  <PaginationLink disabled>...</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink 
                    isActive={page === currentPage}
                    onClick={() => onPageChange(page)}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </>
            ) : (
              <PaginationLink 
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
