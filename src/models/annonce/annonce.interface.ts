export interface Annonce {
    $key?: string;
    topic: string;
    vehicleType: string;
    brand: string;
    price: number;
    price_from: number;
    price_to: number;
}