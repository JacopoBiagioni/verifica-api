import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-serietv',
  templateUrl: './search-serietv.component.html',
  styleUrls: ['./search-serietv.component.css']
})
export class SearchSerietvComponent {

  obsSearch! : Observable<Object>

  constructor () { }

}
