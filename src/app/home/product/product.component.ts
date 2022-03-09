import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { product } from './Model/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  totalPage = 0;
  curentOffre: any;
  editOffre: boolean;
  private selectedFiles: any;
  private progress:number;
  private currentFileUpload:any;
  timestamp=0;
  @ViewChild('carousel') carousel;
  constructor(private productService: ProductService,private router:Router, private route:ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.productService.getAll(0, 4).subscribe(result => {
      this.products = result._embedded.products;
      console.log(this.products) ;
           this.totalPage = result.page.totalPages;
    }, ex => console.log(ex));
  }
  onSlide(event): void {
    this.productService.getAll(event.current.substring(10), 4).subscribe(result => {
      this.products = result._embedded.products;
    }, ex => console.log(ex));
  }


  next(): void {
    this.carousel.next();
  }

  previous(): void {
    this.carousel.prev();
  }

  OnEditOffre(img){
    this.curentOffre=img;
    this.editOffre=true;
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
      detailsproduit(img: product) {
        
        const url2 = btoa(img._links.product.href);
        this.router.navigateByUrl('detail-produit/' + url2);
      }
    }
