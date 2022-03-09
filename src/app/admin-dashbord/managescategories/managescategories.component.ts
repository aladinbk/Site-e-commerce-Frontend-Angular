import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CateogoryService } from 'src/app/shared/services/cateogory.service';

@Component({
  selector: 'app-managescategories',
  templateUrl: './managescategories.component.html',
  styleUrls: ['./managescategories.component.css']
})
export class ManagescategoriesComponent implements OnInit {
  categories;
  name:string;
  currentcategorie;
  constructor(private router:Router,private route:ActivatedRoute,private catalservice:CateogoryService) { }

  ngOnInit(): void {
    this.getCategories();
    
    
  }
  onsavecat(data:any){
    console.log(data);
    data.category = {"name":this.name};
    //console.log(data.caegory);
    //data._links.category={"id":this.id};
    this.catalservice.saveRessource(this.catalservice.host+'/addcat',data) 
    .subscribe(res=>{ 
      if(res==""){
        alert("Categorie n'est pas ajouter champs requis*");
      }
      else{
    console.log(res);
    alert("Categorie a été creer");
    this.router.navigateByUrl("gestionscategories");
  }
    },err=>{
    console.log(err);
    alert("Categorie n'est pas ajouter");
   })
  }
  getCategories() {
  
    this.catalservice.getRessource("/categories")
    .subscribe(data=>{
    this.categories=data;
    },err=>{
    console.log(err);
    })
    }
   oneditcategory(id:number){
    this.router.navigate(['editcategorie',id]);


   }
    onDeletecat(c:any){
      let conf=confirm("Etes Vous Sure ?")
      if(conf){
       this.catalservice.deletecat(c.id)
        .subscribe(data=>{
          this.getCategories();
        },err=>{
        console.log(err);
        })
      }
  }
}
