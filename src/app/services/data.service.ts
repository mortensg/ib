import { Injectable } from '@angular/core';
import { suppliers, Roles, Sectors } from '../models/suppliers.model';
import { BehaviorSubject, Observable } from 'rxjs';
import  * as mock from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSubject = new BehaviorSubject<suppliers[]>(mock.getfakeData());
  data$:Observable<suppliers[]> = this.dataSubject.asObservable();

  getData():Observable<suppliers[]>{
    return this.data$;
  }

  addData(supplier:suppliers):void{
    this.dataSubject.next([...this.dataSubject.getValue(), supplier]);
  }

  deleteData(supplier:suppliers):void{
    this.dataSubject.next(this.dataSubject.getValue().filter(s => s.vatNumber !== supplier.vatNumber));
  }

  updateData(supplier:suppliers):void{
    this.dataSubject.next(this.dataSubject.getValue().map(s => s.vatNumber === supplier.vatNumber ? supplier : s));
  }
}
