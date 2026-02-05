export interface DiscountableProduct {
  applyDiscount(discountPercentage: number): void;
}