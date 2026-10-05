import { Product } from "./Product";

export class PhysicalProduct extends Product {
    constructor(
        sku: string,
        name: string,
        price: number,
        public weight: number
    ) {
        super(sku, name, price);
    }

    // override getPriceWithTax() here: price plus 10% tax
        getPriceWithTax(): number {
           return this.price * 1.1;
        }
    // add a getter for weight here that returns something like "2.5 kg"  
    
    get formattedWeight(): string {
        return `${this.weight } kg`;
        
    }
}