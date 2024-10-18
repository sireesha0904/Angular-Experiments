import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cricketer } from '../model/cricketer.model'; // Import the Cricketer model

@Component({
  selector: 'app-cricketer-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule for two-way binding
  templateUrl: './cricketer-detail.component.html',
  styleUrls: ['./cricketer-detail.component.css']
})
export class CricketerDetailComponent {
  @Input() cricketer: Cricketer | null = null;
  @Output() updateCricketerEvent = new EventEmitter<Cricketer>();

  onUpdate() {
    if (this.cricketer) {
      this.updateCricketerEvent.emit(this.cricketer);
    }
  }
}
