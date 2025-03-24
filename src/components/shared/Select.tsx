"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LucideBaby } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function SelectComp({
  placeholder,
  label,
  items,
}: {
  placeholder: string;
  label: string;
  items: {
    value: string;
    label: string;
  }[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentFilter = searchParams.get("babyType") || items[0].value;

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("babyType", value); // Update the category in the URL
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-full sm:max-w-44 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-10 sm:h-[52px] border-[2px] border-blue-950 text-sm sm:text-base outline-none active:border-none">
        <div className="flex gap-2">
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup defaultValue={currentFilter}>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
