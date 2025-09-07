import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  Name: string;
  Email: string;
  Image: string;
}

@Component({
  selector: 'app-common-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-grid.html',
  styleUrls: ['./common-grid.css']
})
export class CommonGrid {
  
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() getImageSource: (row: any) => string = () => '';
  
  selectedRows: Set<number> = new Set();
  selectAllChecked: boolean = false;

  SelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    if (this.selectAllChecked) {
      this.selectedRows.clear();
      for (let i = 0; i < this.data.length; i++) {
        this.selectedRows.add(i);
      }
    } else {
      this.selectedRows.clear();
    }
  }

  RowSelection(index: number) {
    if (this.selectedRows.has(index)) {
      this.selectedRows.delete(index);
    } else {
      this.selectedRows.add(index);
    }
    
    this.selectAllChecked = this.selectedRows.size === this.data.length;
  }

  isRowSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }
}
