import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RicercaApiService {
  
  constructor(private http : HttpClient) { }

  searchSerie (query: string) {
  
    const url = 'https://api.tvmaze.com/search/shows?q=${query}'
    return this.http.get(url)
 }
}
