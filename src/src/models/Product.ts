
export default class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `${this.sku} is product ${this.name} and the price is: $${this.price}`; 
    }

   getPriceWithTax(taxRate: number): number {
    return this.price * (1 + taxRate);
  }
}

