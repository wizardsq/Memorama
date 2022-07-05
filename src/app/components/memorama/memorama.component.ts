import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styleUrls: ['./memorama.component.css']
})
export class MemoramaComponent implements OnInit {
  img = [
    {id: 1, url: "/assets/img/angular.png"},
    {id: 2, url: "/assets/img/chash.jpg"},
    {id: 3, url: "/assets/img/cmasmas.jpg"},
    {id: 4, url: "/assets/img/haskell.png"},
    {id: 5, url: "/assets/img/java.png"},
    {id: 6, url: "/assets/img/js.png"},
    {id: 7, url: "/assets/img/kotlin.png"},
    {id: 8, url: "/assets/img/php.png"},
    {id: 9, url: "/assets/img/python.png"},
    {id: 10, url: "/assets/img/R.jpg"},
    {id: 11, url: "/assets/img/react.svg"},
    {id: 12, url: "/assets/img/rust.png"},
    {id: 13, url: "/assets/img/schema.svg"},
    {id: 14, url: "/assets/img/sql.jpg"},
    {id: 15, url: "/assets/img/swift.jpg"},
    {id: 16, url: "/assets/img/ts.png"},
  ];
  cards: any[];
  guardarid: any;
  imgfondo = "/assets/img/html5.jpg";
  aciertos = 16;
  cont = 0;
  intentostotales = 62;
  contintentos = 0;
  waiting: boolean = false;
  constructor() {
    this.cards = [];

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    let count_h = 0;
    //Decalramos el total de cartas
    for (let i = 0; i < this.aciertos * 2; i++){
      if(count_h == this.aciertos){
        count_h = 0;
      }
    let images = this.img[count_h];
    this.cards.push({
      id: images.id,
      url: images.url,
      visible: false,
      active: true
    });
    count_h++;
    }
    this.CardsAleatorias(this.cards);
  }
  // Funcion para encontrar la carta seleccionada
   cartaseleccionada(idx:any) {
     if (!this.cards[idx].active || this.waiting) {
       return;
     }
     this.cards[idx].visible = true;

     if (this.guardarid == null) {
       this.guardarid = idx;
       this.cards[idx].visible = true;
       this.cards[idx].active = false;
     } else {
       if (this.cards[this.guardarid].id == this.cards[idx].id) {
         this.cont++;
         this.cards[idx].visible = true;
         this.cards[idx].active = false;
         this.guardarid = null;
       } else {
         // Tiempo para que la carta se voltee
         let th = this;
         this.waiting = true;
         setTimeout(() => {
           th.cards[th.guardarid].visible = false;
           th.cards[th.guardarid].active = true;
           th.cards[idx].visible = false;
           th.guardarid = null;
           this.waiting = false;
         }, 0.2 * 1000)
       }
     }
     if (this.aciertos == this.cont){
       alert("Ganaste");
       window.location.reload();
     }if(this.contintentos == this.intentostotales - 1){
       alert("Perdiste");
       window.location.reload();
     }
     this.contintentos++;
   }
   // Creacion del shuffle
  CardsAleatorias(array: any){
    let actual = array.length, ValorTemporal, NumeroRandom;
    while (0 !== actual){
      NumeroRandom = Math.floor(Math.random() * actual);
      actual -= 1;

      ValorTemporal = array[actual];
      array[actual] = array[NumeroRandom];
      array[NumeroRandom] = ValorTemporal;
    }
    return array;
  }

  }
