export type Category = "t-shirts" | "hats" | "jackets" | "pants" | "shoes";

export interface Product {
  product: string;
  price: number;
  category: Category;
  bestSeller: boolean;
  image: string;
  onSale: boolean;
}
