import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CateogoryService} from 'src/app/shared/services/cateogory.service';
import { product } from '../product/Model/product.model';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: any;
  totalPage = 0;
  curentOffre: any;
  editOffre: boolean;
  timestamp = 0;
  timestamp2 = 0;
  timestamp3 = 0;
  public curentcategorie;
  @ViewChild('carousel') carousel;
  url3: any;
  private selectedFiles: any;
  private progress: number;
  private currentFileUpload: any;
  private selectedFiles2: any;
  private progress2: number;
  private currentFileUpload2: any;
  private selectedFiles3: any;
  private progress3: number;
  private currentFileUpload3: any;
  sortedBy = 'Le plus récent';
  public currentPage = 0;
  public currentkeyWord = '';
  public totalPages: number;
  public pages: Array<number>;
  public size = 1;
  ura:any;

  constructor(private productService: ProductService,
              private router: ActivatedRoute,
              private catservice: CateogoryService,private route:Router) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(routeParams => {
      this.url3 = routeParams.url3;
      this.catservice.getProductByCategory(this.url3, 'id' , 'desc').subscribe(data => {
        this.products = data.content;
        console.log(this.products);
      });
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

  getproducts() {
    this.productService.getRessource('/products')
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      }, err => {
        console.log(err);
      });
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
    this.productService.uploadPhotoOffre2(this.currentFileUpload2, this.curentOffre.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress2 = Math.round(100 * event.loaded / event.total);
        console.log(this.progress2);
      } else if (event instanceof HttpResponse) {
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
    this.productService.uploadPhotoOffre3(this.currentFileUpload3, this.curentOffre.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress3 = Math.round(100 * event.loaded / event.total);
        console.log(this.progress3);
      } else if (event instanceof HttpResponse) {
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

  sortBy(key: string, order: string, sortedBy): void {
    this.catservice.getProductByCategory(this.url3, key, order).subscribe(data => {
      this.products = data.content;
    });
    this.sortedBy = sortedBy;
  }
  detailsproduit(c: product) {
    console.log(c.id);
   // const url2 = btoa (c.id);
   // console.log(url2);
     this.ura=c.id;
   const url2 =btoa(this.ura);
   console.log(url2);
   this.route.navigateByUrl('detail-produit/' + url2);
  }
}
