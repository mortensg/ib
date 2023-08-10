import { createReducer, on } from '@ngrx/store';
import { Supplier } from '../../models/suppliers.model';
import * as SuppliersActions from './suppliers.actions';

export interface SuppliersState {
    suppliers: Supplier[];
}

export const initialState: SuppliersState = {
    suppliers: [],
};

export const suppliersReducer = createReducer(
    initialState,
    on(SuppliersActions.suppliersLoaded, (state, { suppliers }) => ({
        ...state,
        suppliers,
    })),
    on(SuppliersActions.supplierAdded, (state, { supplier }) => ({
        ...state,
        suppliers: [...state.suppliers, supplier],
    })),
    on(SuppliersActions.supplierUpdated, (state, { supplier }) => ({
        ...state,
        suppliers: state.suppliers.map((item) => item.id === supplier.id ? supplier : item),
    })),
    on(SuppliersActions.supplierDeleted, (state, { supplier }) => ({
        ...state,
        suppliers: state.suppliers.filter((item) => item.id !== supplier.id),
    }))
);