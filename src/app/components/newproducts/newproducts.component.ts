import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { product } from 'src/app/home/product/Model/product.model';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit {
  products: any;
  timestamp = 0;
  ura:any;
  public curentcategorie;
  @ViewChild('carousel') carousel;
  url3: any;

  sortedBy = 'Le plus récent';

  constructor(private productService: ProductService,
              private router: ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
      this.productService.getProductBynew().subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
   
  
  }
  getTS() {
    return this.timestamp;
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
