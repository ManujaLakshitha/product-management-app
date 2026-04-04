import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-xl font-bold text-blue-600 mb-4">
        Tailwind CSS Test
      </h1>
      <p className="text-lg text-gray-700">
        If you see this styled text, Tailwind CSS is working!
      </p>
      <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>
    </main>
  );
}