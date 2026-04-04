import { Product } from "../types/Product";

export const getProducts = (): Product[] => {
  const data = localStorage.getItem("products");
  try {
    return data ? (JSON.parse(data) as Product[]) : [];
  } catch {
    return [];
  }
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem("products", JSON.stringify(products));
};