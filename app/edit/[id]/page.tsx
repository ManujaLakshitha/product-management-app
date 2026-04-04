"use client";
import { useParams, useRouter } from "next/navigation";
import ProductForm from "../../../components/ProductForm";
import { useProducts } from "../../../hooks/useProducts";
import { Product } from "../../../types/Product";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const { products, updateProduct } = useProducts();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleUpdate = (updated: Omit<Product, "id">) => {
    updateProduct(product.id, updated);
    router.push("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Edit Product</h1>
      <ProductForm onSubmit={handleUpdate} initialData={product} />
    </div>
  );
}