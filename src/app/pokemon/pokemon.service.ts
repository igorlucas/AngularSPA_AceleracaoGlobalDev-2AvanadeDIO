import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getByName(name: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }

  getSpecies(){
    return this.http.get(`${this.baseUrl}/pokemon-species`);
  }

}
