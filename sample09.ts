class Item {
    public tax: number;
    private price: number;
    constructor(price: number, tax?: number=10) {
        if(tax) {
            this.tax = tax;
        } else {
            this.tax = 10
        }
        this.tax = tax;
        if(isFinite(price)) {
            this.price = price;
        } else {
            this.price = 0;
        }
    }

    public getTax(): number {
        return Math.round(this.price * (this.tax / 100))
    }
}

let apple: Item = new Item(100);
console.log(apple.tax);
console.log(apple.getTax());
