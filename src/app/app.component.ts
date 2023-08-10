import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries } from './store/countries/countries.actions';
import { loadSuppliers } from './store/suppliers/suppliers.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'impactbuying';

  navItems:string[] = ['home', 'suppliers', 'metrics', 'about'];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.store.dispatch(loadSuppliers());
  }
  
}
