"use client";
import { useState } from "react";

export default function ProductForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      description,
      image,
    };

    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
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
        onChange={(e) => setPrice(e.target.value)}
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