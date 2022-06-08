import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/hereoes.interface';

@Component({
  selector: 'app-heroe-terjea',
  templateUrl: './heroe-terjea.component.html',
  styles: [
  ]
})
export class HeroeTerjeaComponent {


  @Input() heroe!: Heroe;

}
