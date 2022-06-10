import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/hereoes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }
  `
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
      private router: Router,
      private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return  
    }

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
      this.heroeService.actualizarHeroe(this.heroe).subscribe(heroe =>{
        this.heroe = heroe;
        this.mostrarSnackBar('Registro actualizado');
        console.log('Actulizando heroe', heroe)
      })
    } else {
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(heroe =>{
        console.log('respueta', heroe)
        this.heroe = heroe
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('Registro Creado');
      })
    }
  }

  eliminar() {
    this.heroeService.eliminarHeroe(this.heroe.id!)
      .subscribe(() => this.router.navigate(['/heroes']));
  }

  mostrarSnackBar(mensaje:string){
    this.snackbar.open(mensaje, 'Ok!', {
      duration: 3000
    })
  }

}
