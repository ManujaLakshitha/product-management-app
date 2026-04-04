"use client";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function ProductList() {
  const { products, deleteProduct } = useProducts();

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products yet. Add one!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
}