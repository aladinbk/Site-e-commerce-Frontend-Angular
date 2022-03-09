import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  public curentproduit;

  private curentTime: number;
  private editPhoto: boolean;
 private mode = 0;
 products: any;
 totalPage = 0;
 curentOffre: any;
 editOffre: boolean;
 private selectedFiles: any;
 private progress:number;
 private currentFileUpload:any;
 timestamp=0;
 private selectedFiles2: any;
 private progress2:number;
 private currentFileUpload2:any;
 timestamp2=0;
 private selectedFiles3: any;
 private progress3:number;
 private currentFileUpload3:any;
 timestamp3=0;
 public curentcategorie;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
    let url4=atob(this.route.snapshot.params.url4)
    this.productService.getproduct(url4).subscribe(data=>{
     this.curentproduit=data;
     console.log(this.curentproduit);
    })
  }
  OnEditPhoto(o){
    this.curentproduit=o;
    this.editPhoto=true;
  }
  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
    }
      uploadPhoto() {
        this.progress = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.productService.uploadPhotoOffre(this.currentFileUpload, this.curentproduit.id).subscribe(event => {
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
      onSelectedFile2(event) {
        this.selectedFiles2 = event.target.files;
        }
      uploadPhoto2() {
        this.progress2 = 0;
        this.currentFileUpload2 = this.selectedFiles2.item(0);
        this.productService.uploadPhotoOffre2(this.currentFileUpload2, this.curentproduit.id).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress2 = Math.round(100 * event.loaded / event.total);
            console.log(this.progress2);
          } else if (event instanceof HttpResponse) {
           // this.getOffres("/offreses/search/selectedOffres");
            this.timestamp2 = Date.now();
    
          }
        }, err => {
          alert('Probléme de chargement...');
        });
        this.selectedFiles2 = undefined;
      }
      onSelectedFile3(event) {
        this.selectedFiles3 = event.target.files;
        }
      uploadPhoto3() {
        this.progress3 = 0;
        this.currentFileUpload3 = this.selectedFiles3.item(0);
        this.productService.uploadPhotoOffre3(this.currentFileUpload3, this.curentproduit.id).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress3 = Math.round(100 * event.loaded / event.total);
            console.log(this.progress3);
          } else if (event instanceof HttpResponse) {
           // this.getOffres("/offreses/search/selectedOffres");
            this.timestamp3 = Date.now();
    
          }
        }, err => {
          alert('Probléme de chargement...');
        });
        this.selectedFiles2 = undefined;
      }
      getTS2() {
        return this.timestamp2;
      }
      getTS() {
        return this.timestamp;
      }
     
      getTS3() {
        return this.timestamp3;
      }

  OnUpdateOffre(data) {

    this.productService.updateoffre(this.curentproduit)
    .subscribe(data=>{
      alert("Mise a jour effectué ");
      this.router.navigateByUrl('/gestionproducts');

    },err=>{
      console.log(err);
    })
  }
  
  


}
