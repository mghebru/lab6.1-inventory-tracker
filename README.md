**Task**

Create a simple object-oriented inventory tracker using TypeScript. The tracker will distinguish between PhysicalProduct and DigitalProduct, calculate applicable taxes, 
and manage inventory using modules. This lab will reinforce the key object-oriented programming concepts learned in the last lesson, including inheritance, encapsulation, abstraction, 
and polymorphism, while using TypeScript features such as type annotations and interfaces.

**Instructions
Setup Your Project:**

Create a new directory for the project and initialize it with npm:

mkdir inventory-tracker
cd inventory-tracker
npm init -y

**Install TypeScript and other dependencies:**

npm install typescript @types/node --save-dev
Create a tsconfig.json file:

npx tsc --init
Set up a basic folder structure for the project:

inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   │   ├── PhysicalProduct.ts
│   │   └── DigitalProduct.ts
│   ├── utils/
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
Create the Product Base Class:

**Inside src/models/Product.ts, create a Product base class with the following:**
Properties: sku (string), name (string), price (number).

**Methods:**
displayDetails() - a method that returns a formatted string with the product’s details.
getPriceWithTax() - a method that calculates the final price of the product with tax.

**Create the PhysicalProduct Subclass:**

Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
Add a weight property (number) for physical products.
Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

**Create the DigitalProduct Subclass:**
Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
Add a fileSize property (number) for digital products.
Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
Use a getter method to return the formatted file size in megabytes.

**Create a Tax Calculator Utility:**
Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
Add a function calculateTax() that accepts a Product object and returns the price including tax.

**Implement the Main Program:**
Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
Hint: Utilize polymorphism to your advantage here.

**Compile and Run the Program:**

**Compile the TypeScript code:**

npx tsc

**Run the compiled JavaScript:**

node dist/main.js

**Challenge**
Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes.
Implement a module to handle sorting products by price or by name.
Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.



**Reflection**

**How does TypeScript enforce type safety in this object-oriented program?**

In my program class properties like ski, name, price and weight all have explicit types which would
prevent if we tried to pass a string instead of number for price or access a property that doesn't exist.

**How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?**

Inheritance reduced code duplication for PhysicalProduct and Digital Product by allowing them to reuse
shared logic from the product class to import proprties and only requires that each subclass overrides
methods to make updates easier.


**What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?**

Using access modifiers such as protected to prevent external code from changing price outside of the subclass, this
makes the system easier to run and improves readability.

**If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?**

Polymorphism allows different product types to be treated the same by overriding behaviors but still allowing
the same functionality. 
