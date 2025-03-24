"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Filter({
  filterField,
  options,
}: {
  filterField: string;
  options: { value: string; label: string }[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value: string) {
    const params = new URLSearchParams(searchParams);

    if (params.get("page")) {
      params.set("page", "1"); // Reset page to 1 when changing filters
    }
    params.set(filterField, value);

    // router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className=" border-gray-200 flex items-center sm:gap-1 w-fit">
      {options.map((option) => (
        <button
          className={`border-b-2 ${
            option.value === currentFilter ? "border-black" : ""
          } hover:border-black font-medium px-4 py-1 transition-all duration-300`}
          onClick={() => handleClick(option.value)}
          key={option.value}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
