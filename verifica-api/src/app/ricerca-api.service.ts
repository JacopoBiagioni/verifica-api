import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RicercaApiService {

  constructor(private http : HttpClient) { }

  searchSerie () { 
    const url = 'https://api.tvmaze.com/search/shows?q=${query}'
    const headers = new HttpHeaders({
      Authorization:
      'Bearer'
    })


    let obsSearch = this.http.get(url, { headers });
      return obsSearch
  }


}
