import { Component, OnInit } from '@angular/core';
import { CateogoryService } from 'src/app/shared/services/cateogory.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cat1;
  cat2;
  cat3;
  cat4;
  cat5;
  cat6;
  cat7;
  cat8;
  cat9;
  cat10;
  cat11;
  cat12;
  cat13;
  cat14;
  public currentPage = 0;
  public currentkeyWord = '';
  public totalPages: number;
  public pages: Array<number>;
  public size = 1;
  private currentcategorie;
  products: any;
  constructor( private catservice :CateogoryService,private router: Router ,private productService: ProductService) { }

  ngOnInit(): void {
    this.catservice.getRessource('/categories/1')
    .subscribe(data => {
    this.cat1 = [data];
    }, err => {
      console.log(err);
    });
    this.catservice.getRessource('/categories/2')
    .subscribe(data => {
    this.cat2 = [data];
  
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/3')
    .subscribe(data => {
    this.cat3 = [data];
  
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/4')
    .subscribe(data => {
    this.cat4 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/5')
    .subscribe(data => {
    this.cat5 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/6')
    .subscribe(data => {
    this.cat6 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/7')
    .subscribe(data => {
    this.cat7 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/8')
    .subscribe(data => {
    this.cat8 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/9')
    .subscribe(data => {
    this.cat9 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/10')
    .subscribe(data => {
    this.cat10 = [data];
 
    }, err => {
    console.log(err);
    });

    this.catservice.getRessource('/categories/11')
    .subscribe(data => {
    this.cat11 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/12')
    .subscribe(data => {
    this.cat12 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/13')
    .subscribe(data => {
    this.cat13 = [data];
 
    }, err => {
    console.log(err);
    });
    this.catservice.getRessource('/categories/14')
    .subscribe(data => {
    this.cat14 = [data];
 
    }, err => {
    console.log(err);
    });
  }
  onChercher(form: any) {
    this.currentPage = 0;
   this.currentkeyWord = form.keyword;
    this.chercherproduits();
  }
  chercherproduits() {
  this.productService.getOffpagebyKey(this.currentkeyWord, this.currentPage, this.size)
   .subscribe(data => {
   
   this.totalPages = data['page'].totalPages;
   console.log(data);
   this.pages = new Array<number>(this.totalPages);
   this.products=(<any>data)._embedded.products;
   console.log(this.products);
   }, err => {
     console.log(err);
   });
 }
  getOffresByCat(c){
    this.currentcategorie = c;
    const url3 = btoa(this.currentcategorie._links.produits.href);
    //this.ngOnInit();
    this.router.navigateByUrl('category/' + c.id);
  }
  shownewproducts(){
    this.router.navigateByUrl('newproducts');
  }

}
