import Product from "../models/Product.ts";
export function calculateTax(product: Product): number{
    // product: Object;
    
   return product.price *  (1.10);
}
  // export const calculateTax = (product: Product): 
  // number => { return product.price * 1.10; };
