import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CateogoryService } from 'src/app/shared/services/cateogory.service';
import { ProductService } from 'src/app/shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  
  categories:any;
    id :number;
  category : []=[];
  
  constructor(private router: Router, private route: ActivatedRoute, private catservice: CateogoryService,private prodservice : ProductService) { }
 // Product p =new Product();
  ngOnInit(): void {
    this.getCategories();

  }
  getCategories() {
    this.catservice.getRessource('/categories')
    .subscribe(data => {
    this.categories = (<any>data)._embedded.categories;
    console.log(this.categories);
    }, err => {
    console.log(err);
    });
    }
    onsaveProduit(data: any) {
      JSON.parse(data.id)
      data.category={ "id" : this.id };  
      console.log(data.category);  
      data.id=null;   
       this.prodservice.saveRessource(this.prodservice.host + '/produit/add', data)
      .subscribe(res => {
       
        if (res == '') {
          alert('Vérifier les champs');
        } else {
      console.log(res);
      alert('produit ajoutée avec succées');
      this.router.navigateByUrl('/gestionproducts');
    }
      }, err => {
      console.log(err);
      alert('produit nest pas ajouter');
     });
    }

}
