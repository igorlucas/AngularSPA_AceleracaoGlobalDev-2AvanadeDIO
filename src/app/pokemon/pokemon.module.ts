import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    RouterModule.forRoot([
      { path: 'pokemon-search', component: PokemonComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [PokemonComponent, SearchComponent, CardComponent],
})
export class PokemonModule { }
