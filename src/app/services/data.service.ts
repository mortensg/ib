import { Injectable } from '@angular/core';
import { Supplier } from '../models/suppliers.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
}
