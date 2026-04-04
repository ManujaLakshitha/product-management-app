"use client";

import { Package, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EmptyState() {
  const router = useRouter();

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center animate-fade-in">
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        <Package className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">No products yet</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get started by adding your first product to the catalog
      </p>
      <Button onClick={() => router.push("/add")} className="gap-2">
        <Plus className="h-4 w-4" />
        Add Product
      </Button>
    </div>
  );
}