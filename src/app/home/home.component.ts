import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'nelumbo-project';
  searchValue = "";
  pre1 = "";
  pre2 = "";
  esFavorito = false;
  estrellas =[
    {
      id:1,
      ver: false
    },
    {
      id:2,
      ver: false
    },
    {
      id:3,
      ver: false
    },
    {
      id:4,
      ver: false
    },
    {
      id:5,
      ver: false
    }
  ]
  listaMostrar: any =  [
    
  ]
  listaMostrarAux: any =  [
    
  ]
  listaProductos = [
    {
      id: 1,
      img: '../../../assets/samsung-galaxy-s22.jpg',
      nombre: "Samsung Galaxy S22",
      precioNuevo:"$3.99",
      precioAnterior:"$4.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Samsung",
      favorito: true
    },
    {
      id: 2,
      img: '../../../assets/SAMSUNG-GALAXY-A13.png',
      nombre: "Xiaomi S11",
      precioNuevo:"$5.99",
      precioAnterior:"$7.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Xiaomi",
      favorito: false
    },
    {
      id: 3,
      img: '../../../assets/samsung-galaxy-a04e.jpg',
      nombre: "Samsung Galaxy a04",
      precioNuevo:"$6.99",
      precioAnterior:"$9.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Samsung",
      favorito: true
    },
    {
      id: 4,
      img: '../../../assets/samsung-galaxy-s22.jpg',
      nombre: "Samsung Galaxy A23",
      precioNuevo:"$6.99",
      precioAnterior:"$9.99",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Xiaomi",
      favorito: false
    },
  ];
  listaProductos2 = [
    {
      id: 5,
      img: '../../../assets/moto1.jpg',
      nombre: "Moto Tx",
      precioNuevo:"$3.99",
      precioAnterior:"$4.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Tx",
      favorito: true
    },
    {
      id: 6,
      img: '../../../assets/moto2.jpg',
      nombre: "Moto Vera 2k",
      precioNuevo:"$5.99",
      precioAnterior:"$7.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "celular",
      marca:"Vera",
      favorito: false
    },
    {
      id: 7,
      img: '../../../assets/moto3.jpg',
      nombre: "Moto Vera",
      precioNuevo:"$6.99",
      precioAnterior:"$9.10",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "Motos",
      marca:"Vera",
      favorito: true
    },
    {
      id: 8,
      img: '../../../assets/moto4.jpg',
      nombre: "Moto Tx 200",
      precioNuevo:"$6.99",
      precioAnterior:"$9.99",
      estrellas: 5,
      descripcion:"Este telefono es muy bueno",
      loQuiero: false,
      categoria: "Motos",
      marca:"Tx",
      favorito: false
    },
  ];
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
  listaMarcas = [
    {
      id: 1,
      nombre:"Samsung",
      cateorias: "Celulares",
      seleccion: false
    },
    {
      id: 2,
      nombre:"Xiaomi",
      cateorias: "Celulares",
      seleccion: false
    },
    {
      id: 3,
      nombre:"Tx",
      cateorias: "Motos",
      seleccion: false
    },
    {
      id: 4,
      nombre:"Vera",
      cateorias: "Motos",
      seleccion: false
    },
    ];
    listaCategorias =[
      {
        id: 1,
        nombre: "Todas las categorias"
      },
      {
        id: 2,
        nombre: "Celulares"
      },
      {
        id: 3,
        nombre: "Motocicletas"
      },
    ];
    listaOrden =[
      {
        id: 1,
        nombre: "Mejores Reviews"
      },
      {
        id: 2,
        nombre: "Precio"
      },
      {
        id: 3,
        nombre: "Marca"
      },
    ];
    ordeSelect = "Mejores Reviews"
    categSelect = "Todas las categorias"

    /**
   * Constructor
   *
   * @returns NA
   */
    constructor( ) {
     
      }

      ngOnInit() {
        this.listaMostrar = this.listaProductos.concat(this.listaProductos2)
      }

     

        selectCateg(item: any){
          
          this.listaCategorias
      .filter((value) => value.nombre === item.nombre)
      .forEach((list) => {
        this.categSelect = list.nombre
        if(list.nombre === "Celulares"){
          this.listaMostrar = this.listaProductos
        } else if(list.nombre === "Motocicletas"){
          this.listaMostrar = this.listaProductos2
        } else{
          this.listaMostrar = this.listaProductos.concat(this.listaProductos2)  
        }
        
      });
        }

        selectOrden(item: any){
          
          this.listaOrden
      .filter((value) => value.nombre === item.nombre)
      .forEach((list) => {
        this.ordeSelect = list.nombre
      });
        }


        buscar(){
          
          if(this.searchValue !==""){
          this.listaMostrarAux = []
          this.listaMostrar
          .filter((value: any) => (value.nombre.includes(this.searchValue) || value.categoria.includes(this.searchValue) || value.marca.includes(this.searchValue)))
          .forEach((list: any) => {
           let aux = {
            id: list.id,
            img: list.img,
            nombre: list.nombre,
            precioNuevo: list.precioNuevo,
            precioAnterior: list.precioAnterior,
            estrellas: list.estrellas,
            descripcion: list.descripcion,
            loQuiero: list.loQuiero,
            categoria: list.categoria,
            marca: list.marca,
            favorito: list.favorito
           }
           
           this.listaMostrarAux.push(aux)
            
          });
          this.listaMostrar = this.listaMostrarAux
          } else{
            
            let aux = {
              id: null,
              nombre: this.categSelect
            }
            this.selectCateg(aux)
          }
        }


        filtroFavorito(){
          
          this.esFavorito = !this.esFavorito
          if(this.esFavorito){
          this.listaMostrarAux = []
          this.listaMostrar
          .filter((value: any) => value.favorito === false)
          .forEach((list: any) => {
           let aux = {
            id: list.id,
            img: list.img,
            nombre: list.nombre,
            precioNuevo: list.precioNuevo,
            precioAnterior: list.precioAnterior,
            estrellas: list.estrellas,
            descripcion: list.estrellas,
            loQuiero: list.loQuiero,
            categoria: list.categoria,
            marca: list.marca,
            favorito: list.favorito
           }
           
           this.listaMostrarAux.push(aux)
            
          });
          this.listaMostrar = this.listaMostrarAux
          } else{
            
            let aux = {
              id: null,
              nombre: this.categSelect
            }
            this.selectCateg(aux)
          }
        }

        favorito(item: any, valor: any){
          
          this.listaMostrar
          .filter((value: any) => value.nombre === item.nombre)
          .forEach((list: any) => {
            list.favorito = valor
          });
        }
}
