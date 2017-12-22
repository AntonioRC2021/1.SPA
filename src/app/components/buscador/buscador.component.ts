import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuerrerosService } from '../../servicios/guerreros.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  guerreros:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _guerrerosService: GuerrerosService) {

   }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino']
      this.guerreros = this._guerrerosService.buscarGuerrero( params['termino'] );
      console.log( this.guerreros );
    });

  }

}
