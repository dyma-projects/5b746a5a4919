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

  GetColor(color: string): void {
    this.color = color;
    this.nom ='La couleur change selon la séléclition'
  }

  ngOnInit() {
  }

}
