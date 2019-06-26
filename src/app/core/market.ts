export class Market {
    public id: number;
    public name: string;
    public description: string;
    public address: string;
    public longitude: number;
    public latitude: number;
    public overallRate: number;
    public cost: number;
    public distance = 0;

    constructor(id: number, name: string, description: string, address: string, longitude: number, latitude: number, overallRate: number,
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
}
