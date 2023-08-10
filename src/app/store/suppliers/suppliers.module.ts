import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { suppliersReducer } from './suppliers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SuppliersEffects } from './suppliers.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('suppliers', suppliersReducer),
    EffectsModule.forFeature([SuppliersEffects]),
  ]
})
export class SuppliersModule { }
