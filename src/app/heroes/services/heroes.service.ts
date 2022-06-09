import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/hereoes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private httt: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httt.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.httt.get<Heroe>(`${this.baseUrl}/${id}`)
  }
}
