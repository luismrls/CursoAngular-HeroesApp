import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private httt: HttpClient) { }

  getHeroes() {
    return this.httt.get('http://localhost:3000/heroes')
  }
}
