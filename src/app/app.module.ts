import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDollarSign, faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import { AccountComponent } from './account/account.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { ChangePasswordComponent } from './Account/change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { ProductService } from './product/product.service';
import { InvalidProductComponent } from './product/invalid-product/invalid-product.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { RegisterComponent } from './account/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccountComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ProfileComponent,
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent,
    InvalidProductComponent,
    UnauthorizedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faUserCircle,faEnvelope,faLock,faDollarSign);
  }
}
