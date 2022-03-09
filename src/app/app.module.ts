import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './home/slide/slide.component';
import { FeaturesComponent } from './home/features/features.component';
import { CategoryComponent } from './home/category/category.component';
import { CallUsComponent } from './home/call-us/call-us.component';
import { ProductComponent } from './home/product/product.component';
import { NewsLetterComponent } from './home/news-letter/news-letter.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { HomeadminComponent } from './admin-dashbord/home/home.component';
import { DetailproduitComponent } from './components/detailproduit/detailproduit.component';
import { SidebarComponent } from './admin-dashbord/sidebar/sidebar.component';
import { ProduitsskincareComponent } from './admin-dashbord/produitsskincare/produitsskincare.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './admin-dashbord/productdetail/productdetail.component';
import { LoginComponent } from './admin-dashbord/login/login.component';
import { NewproductsComponent } from './components/newproducts/newproducts.component';
import { AddproduitComponent } from './admin-dashbord/addproduit/addproduit.component';
import { ManagescategoriesComponent } from './admin-dashbord/managescategories/managescategories.component';
import { EditcategorieComponent } from './admin-dashbord/editcategorie/editcategorie.component';
import { AcheterComponent } from './components/acheter/acheter.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { LivraisonComponent } from './components/livraison/livraison.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideComponent,
    FeaturesComponent,
    CategoryComponent,
    CallUsComponent,
    ProductComponent,
    NewsLetterComponent,
    HomeadminComponent,
    DetailproduitComponent,
    SidebarComponent,
    ProduitsskincareComponent,
    ProductdetailComponent,
    LoginComponent,
    NewproductsComponent,
    AddproduitComponent,
    ManagescategoriesComponent,
    EditcategorieComponent,
    AcheterComponent,
    ConditionsComponent,
    LivraisonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
