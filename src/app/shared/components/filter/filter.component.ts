import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  searchText: string = '';

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterClick = new EventEmitter<void>();
  @Output() documentsClick = new EventEmitter<void>();
  @Output() addClick = new EventEmitter<void>();

  onSearchChange() {
    this.searchChange.emit(this.searchText);
  }

  onFilterClick() {
    this.filterClick.emit();
  }

  onDocumentsClick() {
    this.documentsClick.emit();
  }

  onAddClick() {
    this.addClick.emit();
  }
}
