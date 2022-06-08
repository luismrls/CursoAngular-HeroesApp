import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private heroeSevice: HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id)
    });
  }

}
