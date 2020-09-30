import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './Account/change-password/change-password.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './Home/home.component';
import { InvalidProductComponent } from './product/invalid-product/invalid-product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        }
      ]
    },
  },
  { path: 'account/register', component: RegisterComponent,
    data: {
      title: 'Sign Up',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Sign Up',
          url: ''
        }
      ]
    },
  },
  { path: 'account/login', component: LoginComponent,
    data: {
      title: 'Login',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Login',
          url: ''
        }
      ]
    },
  },
  { path: 'account/forget-password', component: ForgetPasswordComponent,
    data: {
      title: 'Forget Password',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Forget Password',
          url: ''
        }
      ]
    },
  },
  { path: 'account/change-password', component: ChangePasswordComponent,
    data: {
      title: 'Change Password',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Profile',
          url: '/profile'
        },
        {
          label: 'Change Password',
          url: ''
        }
      ]
    },
  },
  { path: 'dashboard', component: DashboardComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Dashboard',
          url: ''
        }
      ]
    },
  },
  { path: 'profile', component: ProfileComponent,
    data: {
      title: 'Profile',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Profile',
          url: ''
        }
      ]
    },
  },
  { path: 'product', component: ProductComponent,
    data: {
      title: 'Product',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Product',
          url: ''
        }
      ]
    },
  },
  { path: 'product-details/:id', component: ProductDetailComponent,
    data: {
      title: 'Product-details',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Product',
          url: '/product'
        },
        {
          label: '{{productName}}',
          url: ''
        },
      ]
    },
  },
  { path: 'invalid-product', component: InvalidProductComponent,
    data: {
      title: 'Invalid Product',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Invalid Product',
          url: ''
        },
      ]
    },
  },
  { path: 'unauthorized', component: UnauthorizedComponent,
    data: {
      title: 'Unauthorized',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home'
        },
        {
          label: 'Unauthorized',
          url: ''
        },
      ]
    },
  },
  //{ path: 'home', component: HomeComponent },
  // { path: 'account', component: AccountComponent, children: [
  //   { path: 'login', component: LoginComponent },
  //   { path: 'forget-password', component: ForgetPasswordComponent },
  //   { path: 'change-password', component: ChangePasswordComponent },
  // ] },
  // { path: 'dashboard', component:DashboardComponent},
  // { path: 'profile', component:ProfileComponent},
  // { path: 'product', component: ProductComponent },
  // { path: 'product-details/:id', component: ProductDetailComponent },
  // { path: 'invalid-product', component: InvalidProductComponent },
  // { path: 'unauthorized', component: UnauthorizedComponent }

  // { path: 'product', component:ProductComponent, children: [
  //   { path: ':id', component: ProductDetailComponent }, 
  // ]} //[routerLink]="['/product/' + product.id]" //sub show in product list page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
