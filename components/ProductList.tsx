"use client";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const { products, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

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
            onEdit={() => router.push(`/edit/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}