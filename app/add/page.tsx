"use client";

import ProductForm from "@/components/ProductForm";
import { useProducts } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const router = useRouter();

  const handleAdd = (product: Omit<Product, "id">) => {
    addProduct(product);
    router.push("/");
  };

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={() => router.back()} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
}