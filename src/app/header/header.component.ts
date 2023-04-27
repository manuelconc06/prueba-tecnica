import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaMenu = [
    {
      id: 1,
      nombre: "Home"
    },
    {
      id: 2,
      nombre: "Celulares"
    },
    {
      id: 3,
      nombre: "Motocicletas"
    },
    {
      id: 4,
      nombre: "Tus préstamos"
    },
    {
      id: 5,
      nombre: "Tiendas"
    },
    {
      id: 6,
      nombre: "Tracking"
    },
    {
      id: 7,
      nombre: "Club Marcopay"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  selectCateg(item: any){
          console.log(item)
  }

}
