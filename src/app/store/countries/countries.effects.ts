import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CountriesActions from './countries.actions';
import { Country } from 'src/app/models/country.model';

@Injectable()
export class CountriesEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesActions.loadCountries),
      switchMap(() =>
        this.http.get<Country[]>('https://restcountries.com/v3.1/independent?status=true&fields=name').pipe(
          map((countries) => CountriesActions.countriesLoaded({ countries })),
          catchError(() => of({ type: 'Error loading countries' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}