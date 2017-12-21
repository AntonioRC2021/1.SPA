import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GuerrerosService } from '../../servicios/guerreros.service';

@Component({
  selector: 'app-guerrero',
  templateUrl: './guerrero.component.html'
})
export class GuerreroComponent {

  guerrero:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _guerrerosService: GuerrerosService
    ){

    this.activatedRoute.params.subscribe( params =>{
      this.guerrero = this._guerrerosService.getGuerrero( params['id'] );
    })
  }

}
