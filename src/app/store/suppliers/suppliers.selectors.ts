import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SuppliersState } from './suppliers.reducer';

export const selectSupplierState = createFeatureSelector<SuppliersState>('suppliers');

export const selectSupplier = createSelector(
    selectSupplierState,
  (state) => state.suppliers
);