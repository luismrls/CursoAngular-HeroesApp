import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/hereoes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private httt: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httt.get<Heroe[]>('http://localhost:3000/heroes')
  }
}
