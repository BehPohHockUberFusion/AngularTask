import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { AuthService } from 'src/app/auth.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productData: Product;
  id : number;
  constructor(private productService: ProductService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) { }

  ngOnInit(): void {

    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['/unauthorized']);
    }
    else
    {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if(this.productData = this.productService.getProductDtl(this.id))
          {}
          else{
            this.router.navigate(['/invalid-product']);
          };
        }
      );
      const breadcrumb =  {productName: this.productData.name}; //ngDynamicBreadcrumbService
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
    }
    
  }
}
