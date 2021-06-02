export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  created_at: number;
  stock: number;
  expired: boolean;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}
