import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeadminComponent} from './admin-dashbord/home/home.component';
import {CategoryComponent} from './home/category/category.component';
import {HomeComponent} from './home/home.component';
import {DetailproduitComponent} from './components/detailproduit/detailproduit.component';
import {ProduitsskincareComponent} from './admin-dashbord/produitsskincare/produitsskincare.component';
import {ProductdetailComponent} from './admin-dashbord/productdetail/productdetail.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginComponent} from './admin-dashbord/login/login.component';
import { NewproductsComponent } from './components/newproducts/newproducts.component';
import { AddproduitComponent } from './admin-dashbord/addproduit/addproduit.component';
import { ManagescategoriesComponent } from './admin-dashbord/managescategories/managescategories.component';
import { EditcategorieComponent } from './admin-dashbord/editcategorie/editcategorie.component';
import { AcheterComponent } from './components/acheter/acheter.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { LivraisonComponent } from './components/livraison/livraison.component';

const routes: Routes = [ 
  {path: 'category/:url3', component: CategoryComponent},
  {path: 'home-admin', component: HomeadminComponent, canActivate: [AuthGuard]},
  {path: 'gestionproducts', component: ProduitsskincareComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'detail-produit/:url2', component: DetailproduitComponent},
  {path: 'detail-product/:url4', component: ProductdetailComponent , canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'newproducts', component: NewproductsComponent},
  {path: 'addproduit', component: AddproduitComponent , canActivate: [AuthGuard]},
  {path: 'gestionscategories', component: ManagescategoriesComponent, canActivate: [AuthGuard]},
  {path: 'editcategorie/:id', component: EditcategorieComponent, canActivate: [AuthGuard]},
  {path: 'acheter', component: AcheterComponent},
  {path: 'A_propos', component: ConditionsComponent},
  {path: 'livraison', component: LivraisonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
