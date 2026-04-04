"use client";

import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  searchTerm: string;
  onSearch: (term: string) => void;
  onFilter?: (filter: string) => void;
};

export default function SearchBar({ searchTerm, onSearch, onFilter }: Props) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-9 pr-8"
          />
          {searchTerm && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {showFilters && onFilter && (
        <div className="flex gap-2 p-2 rounded-lg bg-muted/50">
          <Button size="sm" variant="ghost" onClick={() => onFilter("all")}>
            All
          </Button>
          <Button size="sm" variant="ghost" onClick={() => onFilter("expensive")}>
            Expensive (&gt;$100)
          </Button>
          <Button size="sm" variant="ghost" onClick={() => onFilter("cheap")}>
            Cheap (&lt;$50)
          </Button>
        </div>
      )}
    </div>
  );
}