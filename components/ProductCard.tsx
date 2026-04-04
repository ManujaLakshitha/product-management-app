"use client";
import { useRouter } from "next/navigation";
import { Product } from "../types/Product";

interface Props {
    product: Product;
    onDelete: (id: number) => void;
}

export default function ProductCard({ product, onDelete }: Props) {

    const router = useRouter();
    
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
            <p className="text-sm mt-2">{product.description}</p>

            {product.image && (
                <img
                    src={product.image}
                    alt={product.name}
                    className="mt-2 w-full h-40 object-cover rounded"
                />
            )}

            <button
                onClick={() => router.push(`/edit/${product.id}`)}
                className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded"
            >
                Edit
            </button>

            <button
                onClick={() => onDelete(product.id)}
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
            >
                Delete
            </button>
        </div>
    );
}