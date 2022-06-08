import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/hereoes.interface';

@Component({
  selector: 'app-heroe-terjea',
  templateUrl: './heroe-terjea.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `]
})
export class HeroeTerjeaComponent {


  @Input() heroe!: Heroe;

}
