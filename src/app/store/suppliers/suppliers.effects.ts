import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as suppliersActions from './suppliers.actions';
import { Supplier } from '../../models/suppliers.model';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

@Injectable()
export class SuppliersEffects {
    LoadSuppliers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(suppliersActions.loadSuppliers),
            switchMap(() =>
                this.dataService.getData().pipe(
                    map((suppliers: Supplier[]) => suppliersActions.suppliersLoaded({ suppliers })),
                    catchError(() => of({ type: 'Error loading suppliers' }))
                )
            )
        )
    );
    constructor(private actions$: Actions, private dataService: DataService) {}
}