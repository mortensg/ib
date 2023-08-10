import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  getAllCountries(){
    return this.http.get('https://restcountries.com/v3.1/independent?status=true&fields=name');
  }

}
