"use client";
import ProductForm from "../../components/ProductForm";
import { useProducts } from "../../hooks/useProducts";
import { useRouter } from "next/navigation";
import { Product } from "../../types/Product";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const router = useRouter();

  const handleAdd = (product: Omit<Product, "id">) => {
    addProduct(product);
    router.push("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add Product</h1>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
}