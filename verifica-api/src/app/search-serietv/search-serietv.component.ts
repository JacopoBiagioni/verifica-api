import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RicercaApiService } from '../ricerca-api.service';

@Component({
  selector: 'app-search-serietv',
  templateUrl: './search-serietv.component.html',
  styleUrls: ['./search-serietv.component.css']
})
export class SearchSerietvComponent {

  query! : string;
  obsSearch! : Observable<Object>;
  item!: any;

  constructor (public ricerca : RicercaApiService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }  

  this.query = query.value;
  this.obsSearch = this.ricerca.searchSerie(this.query);
  this.obsSearch.subscribe((data) => { this.item = data; console.log(this.item)});
  }
}
