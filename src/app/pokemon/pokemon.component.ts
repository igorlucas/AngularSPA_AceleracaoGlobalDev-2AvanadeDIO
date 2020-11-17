import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Specie } from './specie';
import { PokemonService } from './pokemon.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  isLoading: boolean;
  selectedPokemon: Pokemon;
  species: Array<Specie>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadSpecies();
  }

  onPickedPokemon(event) {
    this.selectedPokemon = event.pokemon;
  }


  loadSpecies() {
    this.pokemonService.getSpecies()
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((res: any) => {
      this.species = res.results;
    }, error => console.log(error));
  }
}

