import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  constructor() {
    this.statut = true;
   }
  public statut:boolean;

  Inverse():void{
    this.statut=!this.statut;
  }
  ngOnInit() {
  }

}
