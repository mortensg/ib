import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/independent?status=true&fields=name').pipe(
      catchError(() => {
        return of([
          {name: {common: 'Denmark'}},
          {name: {common: 'Sweden'}},
          {name: {common: 'Nederland'}},
        ]);
      })
    );
  }
}
