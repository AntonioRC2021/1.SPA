import { Component, OnInit } from '@angular/core';
import { GuerrerosService, Guerrero } from '../../servicios/guerreros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  guerreros:Guerrero[] = [];

  constructor( private _guerrerosServices:GuerrerosService,
               private router:Router
                ) {

  }

  ngOnInit() {
    this.guerreros = this._guerrerosServices.getGuerreros();
  }

  verGuerrero( idx:number ){
    this.router.navigate( ['/guerrero',idx] )
  }

}
