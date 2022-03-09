import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { product } from 'src/app/home/product/Model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-produitsskincare',
  templateUrl: './produitsskincare.component.html',
  styleUrls: ['./produitsskincare.component.css']
})
export class ProduitsskincareComponent implements OnInit {
  offres:any;
  private editOffre: boolean;
  private curentOffre: any;
  private selectedFiles;
  private progress: number;
  private currentFileUpload: any;
  timestamp = 0;
  public size = 10;
 
  public currentPage = 0;
  public totalPages: number;
  public pages: Array<number>;

  public currentkeyWord = '';
 constructor(private httpClient: HttpClient,private route: ActivatedRoute, private router: Router,private productService: ProductService) {}
 
   ngOnInit() {
     this.getCategories();
     this.gettousoffres();
 }

    gettousoffres() {
   this.productService.getproducts(this.currentPage, this.size)
    .subscribe(data => {
     this.totalPages = data['page'].totalPages;
     console.log(this.totalPages);
      this.pages = new Array<number>(this.totalPages);
      this.offres = (<any>data)._embedded.products;;
   }, err => {
      console.log(err);
    });
  }
 
  onPageoffres(i) {
    this.currentPage = i;
    this.chercherproduits();
  }
  onChercher(form: any) {
    this.currentPage = 0;
   this.currentkeyWord = form.keyword;
    this.chercherproduits();
  }
  chercherproduits() {
  this.productService.getOffpagebyKey(this.currentkeyWord, this.currentPage, this.size)
   .subscribe(data => {
   console.log(data);
   this.totalPages = data['page'].totalPages;
   console.log(this.totalPages);
   this.pages = new Array<number>(this.totalPages);
   this.offres = (<any>data)._embedded.products;
   }, err => {
     console.log(err);
   });
 }
 onDeleteOffre(o:product) {
  let conf=confirm("Etes Vous Sure ?")
  if(conf){
    this.productService.deleteprod(o.id)
    .subscribe(data=>{
      let conf=confirm("produit a été supprimé")
      location.reload();
    },err=>{
     console.log(err);
    })
  }
 }
 OnEditOffre(o) {
   this.curentOffre = o;
   this.editOffre = true;
 }
 onSelectedFile(event) {
 this.selectedFiles = event.target.files;
 }
   uploadPhoto() {
     this.progress = 0;
     this.currentFileUpload = this.selectedFiles.item(0);
     this.productService.uploadPhotoOffre(this.currentFileUpload, this.curentOffre.id).subscribe(event => {
       if (event.type === HttpEventType.UploadProgress) {
         this.progress = Math.round(100 * event.loaded / event.total);
         console.log(this.progress);
       } else if (event instanceof HttpResponse) {
        // this.getOffres("/offreses/search/selectedOffres");
         this.timestamp = Date.now();
 
       }
     }, err => {
       alert('Probléme de chargement...');
     });
     this.selectedFiles = undefined;
   }
   getTS() {
     return this.timestamp;
   }
 
   onOffresDetails(o: product) {
     const url4 = btoa(o._links.product.href);
    this.router.navigateByUrl('detail-product/' + url4);
   }
 
   getCategories() {
 
   /*  this.catService.getRessource('/categories')
     .subscribe(data => {
     this.categories = data;
     }, err => {
     console.log(err);
     });*/
     }
    
 

}
