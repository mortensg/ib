import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { AboutComponent } from './components/about/about.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path: 'suppliers', component: SuppliersComponent
  },
  {
    path: 'metrics', component: MetricsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'add-supplier', component: AddSupplierComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
