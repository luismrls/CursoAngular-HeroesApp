import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/hereoes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }

  constructor(private heroeService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroeById(id))
      )
      .subscribe(heroe => this.heroe = heroe)
  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return
    }

    if (this.heroe.id) {
      this.heroeService.actualizarHeroe(this.heroe).subscribe(resp => console.log('Actulizando heroe', resp))
    } else {
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(resp =>{
        console.log('respueta', resp)
        this.router.navigate(['/heroes/editar', this.heroe.id]);
      })
    }

  }

}
