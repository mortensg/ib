import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.scss']
})
export class SelectedItemsComponent {
  @Input() items: string[] = [];
  @Output() removeItem: any = new EventEmitter();

  remove( item: string) {
    this.removeItem.emit(item);
  }
}
