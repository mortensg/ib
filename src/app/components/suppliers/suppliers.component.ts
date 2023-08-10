import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supplier } from 'src/app/models/suppliers.model';
import { selectSupplier } from 'src/app/store/suppliers/suppliers.selectors';
import { supplierDeleted } from 'src/app/store/suppliers/suppliers.actions';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent {
  displayedColumns: string[] = ['vatNumber', 'name', 'country', 'roles', 'sector', 'actions'];

  constructor(private store:Store) { }

  data$ = this.store.select(selectSupplier);

  deleteData(supplier:Supplier) {
    this.store.dispatch(supplierDeleted({supplier}));
  }
}
