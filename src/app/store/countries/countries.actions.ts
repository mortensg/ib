import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country.model';

export const loadCountries = createAction('[Countries] Load Countries');

export const countriesLoaded = createAction(
  '[Countries] Countries Loaded',
  props<{ countries: Country[] }>()
);