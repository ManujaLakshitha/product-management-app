"use client";

import { useParams, useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/Product";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const { products, updateProduct } = useProducts();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex h-96 flex-col items-center justify-center gap-4">
        <p className="text-lg text-muted-foreground">Product not found</p>
        <Button onClick={() => router.push("/")}>Go Home</Button>
      </div>
    );
  }

  const handleUpdate = (updated: Omit<Product, "id">) => {
    updateProduct(product.id, updated);
    router.push("/");
  };

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={() => router.back()} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <ProductForm onSubmit={handleUpdate} initialData={product} isEditing />
    </div>
  );
}