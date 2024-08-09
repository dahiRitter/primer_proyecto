import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Animals } from 'src/app/models/animals';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Animals[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "alimento para perros Criadores 20kg",
        anual:59000 ,
        imagen: "https://nutrican.com.ar/wp-content/uploads/2022/09/SIEGER-CRIADORES.png",
        alt: "comida"
      },
      {
        id: "",
        nombre: "cama de peluchito",
        anual: 10000,
        imagen: "https://bunny-cdn.ventasxmayor.com/6060d74cd1d2d2d24cd1d2d2d26363/public/56893129674751008/1654618057905-whatsappimage2022-06-07at1.07.15pm.jpeg",
        alt: "cama"
      },
      {
        id: "",
        nombre: "Soga Juguete Para Perros 2 Nudos Puro Algodón 20 Cm",
        anual: 2760,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_658191-MLA31787987586_082019-O.webp",
        alt: "soga"
      },
      
    ]
  }
}
