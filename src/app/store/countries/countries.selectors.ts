import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CountriesState } from './countries.reducer';

export const selectCountriesState = createFeatureSelector<CountriesState>('countries');

export const selectCountries = createSelector(
  selectCountriesState,
  (state) => state.countries
);