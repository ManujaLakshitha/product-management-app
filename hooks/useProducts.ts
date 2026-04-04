import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { getProducts, saveProducts } from "../lib/localStorage";
import { toast } from "sonner";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = { 
      ...product, 
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product added successfully!");
  };

  const updateProduct = (id: string, updated: Partial<Omit<Product, "id">>) => {
    const newProducts = products.map(p =>
      p.id === id ? { ...p, ...updated, updatedAt: new Date().toISOString() } : p
    );
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product updated successfully!");
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    saveProducts(newProducts);
    toast.success("Product deleted successfully!");
  };

  return { products, addProduct, updateProduct, deleteProduct };
};