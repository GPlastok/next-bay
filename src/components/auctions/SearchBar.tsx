"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "all";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";

  function updateFilters(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.push(pathname + "?" + params.toString());
  }
  return (
    <div className="flex flex-col">
      <div className="flex p-4">
        <Select
          value={status}
          onValueChange={(value) => updateFilters("status", value)}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <div>
          <Label htmlFor="maxPrice">Max Price</Label>
          <Input
            id="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => updateFilters("maxPrice", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="minPrice">Min Price</Label>
          <Input
            id="minPrice"
            type="number"
            value={minPrice}
            onChange={(e) => updateFilters("minPrice", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
