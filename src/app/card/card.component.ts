import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagen:String="https://www.clipartmax.com/png/middle/92-921947_arboles-animados-png-arboles-animados-png-arboles-animados-png-arboles-animados-png.png";
  public titulo:String="Bienvenido a Angular 2";
  constructor() { }

  ngOnInit(): void {
  }

}
