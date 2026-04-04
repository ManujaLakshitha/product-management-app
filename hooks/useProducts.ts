import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { getProducts, saveProducts } from "../lib/localStorage";
import toast from "react-hot-toast";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product: Omit<Product, "id">) => {
    const newProducts = [...products, { ...product, id: Date.now() }];
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product added successfully!");
  };

  const updateProduct = (id: number, updated: Partial<Product>) => {
    const newProducts = products.map(p =>
      p.id === id ? { ...p, ...updated } : p
    );
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product updated successfully!");
  };

  const deleteProduct = (id: number) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product deleted successfully!");
  };

  return { products, addProduct, updateProduct, deleteProduct };
};