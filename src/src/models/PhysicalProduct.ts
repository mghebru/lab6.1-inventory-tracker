import Product from "./Product.ts";
import type { DiscountableProduct } from "./DiscountableProduct.ts";

export class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number; 

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }
    override getPriceWithTax(taxRate: number): number {
        taxRate = .10;
        return this.price * (1 + taxRate);
    }

    get formattedWeight(): string {
        return this.weight + "kg";
    }

    applyDiscount(discountRate: number): void {
    this.price = this.price * (1 - discountRate);
  }


   applyBulkDiscount(): void {
    if (this.weight >= 50) {
      this.applyDiscount(0.15); // 15% off for heavy items
    }
  }
  
}