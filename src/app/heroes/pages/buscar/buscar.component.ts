import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  heroeSeleccionado!: Heroe;

  constructor(private hereoService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    
    this.hereoService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    console.log(event)

    if(event.option.value != ''){
      const heroe: Heroe = event.option.value;

      this.termino = heroe.superhero;

      this.hereoService.getHeroeById(heroe.id!)
        .subscribe(heroe => this.heroeSeleccionado = heroe);
    }

  }

}
