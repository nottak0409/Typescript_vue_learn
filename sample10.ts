class Book {
    private _name: string = ''; :
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
