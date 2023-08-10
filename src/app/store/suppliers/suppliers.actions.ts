import { createAction, props } from '@ngrx/store';
import { Supplier } from '../../models/suppliers.model';

export const loadSuppliers = createAction('[Suppliers] Load Suppliers');
export const suppliersLoaded = createAction('[Suppliers] Suppliers Loaded', props<{ suppliers: Supplier[] }>());
export const supplierAdded = createAction('[Suppliers] Supplier Added', props<{ supplier: Supplier }>());
export const supplierUpdated = createAction('[Suppliers] Supplier Updated', props<{ supplier: Supplier }>());
export const supplierDeleted = createAction('[Suppliers] Supplier Deleted', props<{ supplier: Supplier }>());