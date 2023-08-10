import { Roles, Sectors, Supplier } from "../models/suppliers.model";

  export const getfakeData = (): Supplier[] => {
    return [
        { 
          id: '312315425233423423423',
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 1',
          country: 'USA',
          roles: [Roles.Producer],
          sector : [Sectors.Apple, Sectors.Banana]
        },
        {
          id: '123123123124514514514',
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 2',
          country: 'USA',
          roles: [Roles.Grower],
          sector : [Sectors.Apple, Sectors.Banana]
        },
        {
          id: '123123123123123123123',
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 3',
          country: 'USA',
          roles: [Roles.Producer, Roles.Grower],
          sector: [Sectors.Apple, Sectors.Banana]
        }
      ]
  }
