import Parse from 'parse';

export class Category {
    public id: string;
    public name: string;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromParse(parseObject) {
        return new Category(parseObject.id, parseObject.get('name'));
    }

    static getParseObject() {
        return Parse.Object.extend('Category');
    }

    static getParseObjectRel(id: string) {
        const parse = this.getParseObject();
        const obj = new parse();
        obj.id = id;
        return obj;
    }
}
