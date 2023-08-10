import { createReducer, on } from '@ngrx/store';
import { Country } from '../../models/country.model';
import * as CountriesActions from './countries.actions';

export interface CountriesState {
  countries: Country[];
}

export const initialState: CountriesState = {
  countries: [
    {
      name: { common: 'Denmark' },
    }
  ],
};

export const countriesReducer = createReducer(
  initialState,
  on(CountriesActions.countriesLoaded, (state, { countries }) => ({
    ...state,
    countries,
  }))
);