import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/hereoes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private route: ActivatedRoute, private heroeSevice: HeroesService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => this.heroeSevice.getHeroeById(id))
      )
      .subscribe(heroe => {
        console.log(heroe);
        this.heroe = heroe;
      });
  }

}
