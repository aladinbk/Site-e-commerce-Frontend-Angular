import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CateogoryService } from 'src/app/shared/services/cateogory.service';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editcategorie',
  templateUrl: './editcategorie.component.html',
  styleUrls: ['./editcategorie.component.css']
})
export class EditcategorieComponent implements OnInit {
  id:number;
  category:any;
  constructor(activatedRoute:ActivatedRoute,
    private catalservice: CateogoryService,  
    private httpClient:HttpClient,
    private route:ActivatedRoute,private router:Router) {   
    
  JSON.parse(this.id=activatedRoute.snapshot.params['id']);   
  }

  ngOnInit(): void {
    this.catalservice.getonecategorie(this.id)
    .subscribe(data=>{
      this.category=data;
      console.log(this.category);
    },err=>{
      console.log(err);
    })
  }
  update(){
    this.catalservice.updatecategory(this.category)
    .subscribe(data=>{
      alert("Mise a jour effectué ")
      this.router.navigate(['gestionscategories']);
    },err=>{
      console.log(err);
    })
  }

}
