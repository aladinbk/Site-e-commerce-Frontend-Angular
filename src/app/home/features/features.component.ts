import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  emailvalid:any;
  constructor() { }

  ngOnInit(): void {

  }

  abonnee(){
    this.emailvalid=(<HTMLInputElement>document.getElementById("email")).value
    if ((this.emailvalid.indexOf('@')>0)  && (this.emailvalid.indexOf('.')>0) ){
      alert(  "Vous étes abonnée à ce email : " + this.emailvalid);
      
    }
    else{
      alert (" Votre email est invalide")
    }
  }
  
}
