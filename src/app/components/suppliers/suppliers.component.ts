import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { suppliers } from 'src/app/models/suppliers.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent {

  constructor(private dataService:DataService) { }

  data$: Observable<suppliers[]> = this.dataService.getData();

  deleteData(supplier:suppliers) {
    this.dataService.deleteData(supplier);
  }

}
