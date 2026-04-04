"use client";
import { useState } from "react";
import { Product } from "../types/Product";

interface Props {
  onSubmit: (product: Omit<Product, "id">) => void;
  initialData?: Partial<Product>;
}

export default function ProductForm({ onSubmit, initialData = {} }: Props) {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || 0);
  const [description, setDescription] = useState(initialData.description || "");
  const [image, setImage] = useState(initialData.image || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!price || price <= 0) {
      setError("Valid price is required");
      return;
    }

    setError("");
    onSubmit({ name, price, description, image });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full p-2 border rounded"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Product
      </button>
    </form>
  );
}