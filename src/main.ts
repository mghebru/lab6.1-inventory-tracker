import {PhysicalProduct} from "./models/PhysicalProduct.ts";
import {DigitalProduct} from "./models/DigitalProduct.ts";


const abc = new PhysicalProduct('56432', 'cereal', 40, 2.5);
console.log(abc.displayDetails());

const def1 = new DigitalProduct('56432', 'cereal', 40, 200);
console.log(def1.displayDetails());