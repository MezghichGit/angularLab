import { Component, OnInit } from '@angular/core';
import { Cours } from '../models';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mesCours:Cours[]=[
    {"id":1,"nom":"java","vh":10},
    {"id":2,"nom":"typescript","vh":15},
    {"id":3,"nom":"css","vh":4}
  ];
  test:boolean=true;
  srcImage:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  // attribut
 public formation:string="Full Stack";
 public tab : string[] = ["spring boot","git","data","scrum","security"];
  constructor(private produit:ProduitService) {
    console.log("Constructeur de home");
  }

  ngOnInit(): void {
    console.log("ngOnInit de home");
  }
info(){
 // alert("Hello Event");
 //this.test = !this.test;
 this.produit.infoProduit();
}
}
