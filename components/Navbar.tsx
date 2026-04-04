"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Product Manager</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/add">Add Product</Link>
      </div>
    </nav>
  );
}