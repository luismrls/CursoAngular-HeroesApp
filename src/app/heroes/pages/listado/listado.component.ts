import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hereoes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroreService: HeroesService) { }

  ngOnInit(): void {
    this.heroreService.getHeroes().subscribe( resp => { 
      this.heroes = resp
    });
  }

}
