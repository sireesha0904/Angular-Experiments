import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})

export class ItemListComponent implements OnInit, OnDestroy {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor() {
    console.log('Constructor: ItemListComponent is created.');
  }

  ngOnInit(): void {
    console.log('ngOnInit: ItemListComponent initialized.');
  }

  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
    console.log('Item added:', this.items[this.items.length - 1]);
  }

  removeLastItem(): void {
    const removedItem = this.items.pop(); // Removes the last item
    console.log('Item removed:', removedItem);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: ItemListComponent is being destroyed.');
  }
}