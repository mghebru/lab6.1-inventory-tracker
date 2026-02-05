import Product from "./Product.ts";

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    override getPriceWithTax(taxRate: number): number {
        taxRate = 0;
        return this.price * (1 + taxRate);
    }

    override displayDetails(): string {
        return super.displayDetails() + ` and file size is ${this.formattedFile}`; 
    }

    get formattedFile(): string {
        return this.fileSize + "mb";
    }


}
//const product = new DigitalProduct();