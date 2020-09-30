import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';
import { prodVariance } from './productVariance.model';

@Injectable()
export class ProductService {

  productsChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
        1,'Honda City',
        'The Honda City has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1498 cc while the Petrol engine is 1498 cc. It is available with the Manual and Automatic transmission. Depending upon the variant and fuel type the City has a mileage of 17.8 to 24.1 kmpl. The City is a 5 seater Sedan and has a length of 4549mm, width of 1748mm and a wheelbase of 2600mm.',
        'https://evault.honda.com.my/pixelvault/2020-02/dd746215be531dd0b913e2f4a51e2f625695043c94612.jpg',
        [
            new prodVariance('City 1.5L S', 74955.36),
            new prodVariance('City 1.5L E', 80638.91),
            new prodVariance('City 1.5L V', 87260.63),
        ]),
    new Product(
        2,'Toyota Vious',
        'The Toyota Yaris has 1 Petrol Engine on offer. The Petrol engine is 1496 cc. It is available with the Manual and Automatic transmission. Depending upon the variant and fuel type the Yaris has a mileage of 17.18 to 18.1 kmpl. The Yaris is a 5 seater Sedan and has a length of 4425mm, width of 1730mm and a wheelbase of 2550mm.',
        'https://www.toyota.com.my/media/image/attachment/12/vios-red-blackskirting.png',
        [
            new prodVariance('VIOS 1.5J (AT)', 76101.00),
            new prodVariance('VIOS 1.5E (AT)', 80074.00),
            new prodVariance('VIOS 1.5G (AT)', 86132.00),
        ]),
  ];

  constructor() {}

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProductDtl(id: number) {
    return this.products.find(x => x.id === id);
    //return this.products.filter(x => x.id === id);
  }

//   addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipesChanged.next(this.recipes.slice());
//   }

//   updateRecipe(index: number, newRecipe: Recipe) {
//     this.recipes[index] = newRecipe;
//     this.recipesChanged.next(this.recipes.slice());
//   }

//   deleteRecipe(index: number) {
//     this.recipes.splice(index, 1);
//     this.recipesChanged.next(this.recipes.slice());
//   }
}
