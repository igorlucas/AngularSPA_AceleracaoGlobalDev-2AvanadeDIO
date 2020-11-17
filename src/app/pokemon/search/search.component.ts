import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() pickedPokemon = new EventEmitter();
  name: string = 'pikachu';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon(this.name);
  }

  onSubmit() {
    this.getPokemon(this.name);
  }

  getPokemon(name: string) {
    this.pokemonService.getByName(name).subscribe(res => {
      this.pokemonSelected(res);
    }, error => console.log(error));
  }

  pokemonSelected(pokemon: any) {
    this.pickedPokemon.emit({ pokemon });
  }

}
