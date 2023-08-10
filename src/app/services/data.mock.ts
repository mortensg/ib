import { Roles, Sectors, suppliers } from "../models/suppliers.model";

  export const getfakeData = (): suppliers[] => {
    return [
        {
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 1',
          country: 'USA',
          roles: [Roles.Producer],
          sector : [Sectors.Apple, Sectors.Banana]
        },
        {
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 2',
          country: 'USA',
          roles: [Roles.Grower],
          sector : [Sectors.Apple, Sectors.Banana]
        },
        {
          vatNumber: Math.floor(Math.random() * 1000000000),
          name: 'Supplier 3',
          country: 'USA',
          roles: [Roles.Producer, Roles.Grower],
          sector: [Sectors.Apple, Sectors.Banana]
        }
      ]
  }
