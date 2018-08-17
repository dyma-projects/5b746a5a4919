import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }
  public color: string;
  public nom: string;
  public valeur: string="valeur default";

  GetColor(color:string):void{
    this.color = color;
  }

  ngOnInit() {
  }

}
