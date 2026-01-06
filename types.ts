
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tags: string[];
  promoText?: string;
  isBogo?: boolean;
  isNew?: boolean;
}

export interface CategoryItem {
  title: string;
  image: string;
  link: string;
}

export interface BrandItem {
  name: string;
  image: string;
  logoText: string;
}
