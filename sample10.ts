class Book {
    private _name: string = ''; :
    readonly code: string = '1234567';
    set name(value: string) {
        if (value === '') {
            console.log('書籍名がないデウs')
        } else {
            this._name =value;
        }
        this._name = value;
    }

    get name(): string {
        return this._name;
    }
}
let mybook = new Book();
console.log(mybook.code)
