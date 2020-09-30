import { prodVariance } from './productVariance.model';

export class Product {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public productVariance : prodVariance[];
  
    constructor(id: number, name: string, desc: string, imagePath: string, productVariance: prodVariance[])
    {
      this.id = id;
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.productVariance = productVariance
    }
  }