import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { SelectedItemsComponent } from './components/selected-items/selected-items.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectedItemsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    SelectedItemsComponent,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule { }
