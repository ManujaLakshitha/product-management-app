"use client";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function ProductList() {
  const { products, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products yet. Add one!</p>;
  }

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}