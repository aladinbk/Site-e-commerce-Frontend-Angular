import { Component, OnInit,ViewChild } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { product } from '../product/Model/product.model';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  products: any[];
  totalPage = 0;
  timestamp=0;
  timestamp2=0;

  @ViewChild('carousel') carousel;
  constructor(private productService: ProductService,private router:Router) {
  }

  ngOnInit(): void {
    this.productService.getAll(0, 1).subscribe(result => {
      this.products = result._embedded.products;
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
  getTS() {
    return this.timestamp;
  }
  getTS2() {
    return this.timestamp2;
  }
  detailsproduit(img: product) {
    console.log(img)
    const url2 = btoa(img._links.product.href);
    this.router.navigateByUrl('detail-produit/' + url2);
  }
}
