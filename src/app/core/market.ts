import Parse from 'parse';

export class Market {
    public id: string;
    public name: string;
    public description: string;
    public address: string;
    public longitude: number;
    public latitude: number;
    public overallRate: number;
    public cost: number;
    public distance = 0;

    constructor(id: string, name: string, description: string, address: string, longitude: number, latitude: number, overallRate: number,
                cost: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.overallRate = overallRate;
        this.cost = cost;
    }

    static fromParse(obj: any): Market {
        return new Market(obj.id, obj.get('name'), obj.get('description'), obj.get('address'), obj.get('longitude'), obj.get('latitude'),
            obj.get('overallRate'), obj.get('cost'));
    }

    static getParseObject() {
        return Parse.Object.extend('Market');
    }

    static getParseObjectRel(id: string) {
        const parse = this.getParseObject();
        const obj = new parse();
        obj.id = id;
        return obj;
    }
}
