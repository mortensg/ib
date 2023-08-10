export class Supplier {
    vatNumber?: number;
    name: string;
    country?: string;
    roles?: Roles[];
    sector?: Sectors[];
}

export enum Roles {
    Producer = 'Producer',
    Grower = 'Grower',
}

export enum Sectors {
    Strawberry = 'Strawberry',
    Banana = 'Banana',
    Apple = 'Apple',
    Orange = 'Orange',
    Grape = 'Grape',
    Watermelon = 'Watermelon',
    Pear = 'Pear',
    Cherry = 'Cherry',
}