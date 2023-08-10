import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/models/suppliers.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent {
  displayedColumns: string[] = ['vatNumber', 'name', 'country', 'roles', 'sector', 'actions'];

  constructor(private dataService:DataService) { }

  data$: Observable<Supplier[]> = this.dataService.getData();

  deleteData(supplier:Supplier) {
    this.dataService.deleteData(supplier);
  }

}
