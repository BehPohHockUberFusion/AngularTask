import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;
  max: number = 0;
  min: number = 0;

  constructor(private productService: ProductService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.authService.getToken();
    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['/unauthorized']);
    }
    else
    {
      this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
      this.products = this.productService.getProducts();
    }
    
    //this.max = this.prices.reduce((a, b) => Math.max(a, b));
    //this.min = this.prices.reduce((a, b) => Math.min(a, b));
  }

  ngOnDestroy() {
    if(this.authService.isAuthenticated())
    {
      this.subscription.unsubscribe();
    }
  }

}
