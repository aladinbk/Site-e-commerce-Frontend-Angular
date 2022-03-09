import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/home/product/Model/product.model';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  public curentproduit:any;
  timestamp=0;
  constructor(private productService: ProductService,  private router:ActivatedRoute) { }

  ngOnInit() {
    let url2=atob(this.router.snapshot.params.url2)
    this.productService.getproduit(url2).subscribe(data=>{
     this.curentproduit=data;
    }
    )

    this.productService.getproduit2(url2).subscribe(data=>{
      this.curentproduit=data;
     })
  }
  getTS() {
    return this.timestamp;
  }

}
