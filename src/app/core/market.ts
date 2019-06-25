export class Market {
    public id: number;
    public name: string;
    public description: string;
    public address: string;
    public longitude: string;
    public latitude: string;
    public overallRate: number;

    constructor(id: number, name: string, description: string, address: string, longitude: string, latitude: string, overallRate: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.overallRate = overallRate;
    }
}
