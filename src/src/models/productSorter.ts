import Product from "./Product.ts";

export type SortBy = "price" | "name";

export function sortProducts(
  products: Product[],
  sortBy: SortBy
): Product[] {
  return [...products].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });
}