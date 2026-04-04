import { useState, useEffect } from 'react';
import { getProducts, saveProducts } from '../lib/localStorage';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product) => {
    const newProducts = [...products, { ...product, id: Date.now() }];
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const updateProduct = (id, updated) => {
    const newProducts = products.map(p => p.id === id ? { ...p, ...updated } : p);
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  return { products, addProduct, updateProduct, deleteProduct };
};