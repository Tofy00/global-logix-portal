
export interface Component {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
  image?: string;
}

export interface CategoryOption {
  id: string;
  label: string;
}

export interface SortOption {
  id: string;
  label: string;
}
