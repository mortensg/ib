import { Injectable } from '@angular/core';
import { Supplier } from '../models/suppliers.model';
import { BehaviorSubject, Observable } from 'rxjs';
import  * as mock from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSubject = new BehaviorSubject<Supplier[]>(mock.getfakeData());
  data$:Observable<Supplier[]> = this.dataSubject.asObservable();

  getData():Observable<Supplier[]>{
    return this.data$;
  }

  addData(supplier:Supplier):void{
    this.dataSubject.next([...this.dataSubject.getValue(), supplier]);
  }

  deleteData(supplier:Supplier):void{
    this.dataSubject.next(this.dataSubject.getValue().filter(s => s.vatNumber !== supplier.vatNumber));
  }

  updateData(supplier:Supplier):void{
    this.dataSubject.next(this.dataSubject.getValue().map(s => s.vatNumber === supplier.vatNumber ? supplier : s));
  }
}
