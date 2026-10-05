export class Product {
    constructor( 
    public sku: string,
    public name: string,
    public price: number
) {}
    getPriceWithTax(): number {
       return this.price;
    }

    displayDetails(): string{
         return `${this.sku}, ${this.name}, $${this.price.toFixed(2)}`;
    }
    
}