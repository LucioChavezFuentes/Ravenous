//DO NOT remove the import, it may say 'never used' but it is used for module type augmentation
//TODO: Why?
/*import {Request} from 'express';

declare module 'express' {
   interface Request {
      body: {
          term: string;
          location: string;
          sortBy: string;
      };

      query: {
        term: string;
        location: string;
        sortBy: string;
      };
    }
  }*/

//Favor to use custom Request and Response interfaces for each handler endpoint over declare module 'express' globally
