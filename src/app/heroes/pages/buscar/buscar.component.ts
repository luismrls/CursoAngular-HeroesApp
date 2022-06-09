import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hereoes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = []

  constructor(private hereoService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.hereoService.getHeroes()
    .subscribe( heroes => this.heroes = heroes );
  }

}
