import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// 1. Create products: new ClassName(sku, name, price, extra)
const laptop = new PhysicalProduct("P100", "Laptop", 999.99, 2.5);
const ebook = new DigitalProduct("D100", "TypeScript E-Book", 19.99, 15);
const headphones = new PhysicalProduct("P200", "Headphones", 149.50, 0.3);
const software = new DigitalProduct("D200", "Photo Editor License", 79.00, 850);

// 2. Put them all in one array of type Product[]
const inventory: Product[] = [laptop, ebook, headphones, software];

// 3. Loop through and print each one
for (const product of inventory) {
    console.log(product.displayDetails());
    console.log(`  Price with tax: $${calculateTax(product).toFixed(2)}`);
}