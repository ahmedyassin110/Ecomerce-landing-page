export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  color: string;
  specs: string[];
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface User {
  name: string;
  email: string;
}

export type Page = 'home' | 'categories' | 'products' | 'cart';
