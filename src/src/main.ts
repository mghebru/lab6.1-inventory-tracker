import {PhysicalProduct} from "./models/PhysicalProduct.ts";
import {DigitalProduct} from "./models/DigitalProduct.ts";
import { sortProducts } from "./models/productSorter.ts";

//physical product
const physical = new PhysicalProduct('56432', 'cereal', 40, 2.5);
console.log(physical.displayDetails());
console.log("Price with tax:", physical.getPriceWithTax(0.1));
console.log("Weight:", physical.formattedWeight);

//apply bulk discount if applicable
physical.applyBulkDiscount();

//digital product
const digital = new DigitalProduct('56432', 'cereal', 40, 200);
console.log(digital.displayDetails());
console.log("Price with tax:", digital.getPriceWithTax(0.05));

//store products together
const inventory = [physical, digital];

//sort products
const sortedByPrice = sortProducts(inventory, "price");
const sortedByName = sortProducts(inventory, "name");

console.log("Sorted by price:", sortedByPrice);
console.log("Sorted by name:", sortedByName);