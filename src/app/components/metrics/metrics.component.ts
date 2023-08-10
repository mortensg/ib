import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Supplier } from 'src/app/models/suppliers.model';
import { selectSupplier } from 'src/app/store/suppliers/suppliers.selectors';

export interface Metrics {
  totalSuppliers:number;
  countries: string[];
  sectors: string[];
  roles: string[];
}

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {

  suppliers$:Observable<Metrics> = this.store.select(selectSupplier).pipe(map((suppliers:Supplier[]) => {
    return {
      totalSuppliers: suppliers.length,
      countries: [...new Set(suppliers.map(supplier => supplier.country!))],
      sectors: [...new Set(suppliers.map(supplier => supplier.sector!).flat())],
      roles: [...new Set(suppliers.map(supplier => supplier.roles!).flat())]
    }
  }));


  constructor(private store:Store) { }

}
