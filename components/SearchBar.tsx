"use client";

type Props = {
  searchTerm: string;
  onSearch: (term: string) => void;
};

export default function SearchBar({ searchTerm, onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}