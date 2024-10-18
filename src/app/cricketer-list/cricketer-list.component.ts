import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cricketer } from '../model/cricketer.model'; // Import the Cricketer model
import { CricketerDetailComponent } from '../cricketer-detail/cricketer-detail.component';

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [CommonModule, CricketerDetailComponent], 
  templateUrl: './cricketer-list.component.html',
  styleUrls: ['./cricketer-list.component.css']
})
export class CricketerListComponent {
  cricketers: Cricketer[] = [
    { no: 1, name: 'Rahul Dravid', address: '', city: 'Karnataka', state: 'India', country: 'India' },
    { no: 2, name: 'Sachin Tendulkar', address: '', city: 'Maharashtra', state: 'India', country: 'India' },
    { no: 3, name: 'Saurav Ganguly', address: '', city: 'West Bengal', state: 'India', country: 'India' },
    { no: 4, name: 'MS Dhoni', address: '', city: 'Bihar', state: 'India', country: 'India' },
    { no: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'India', country: 'India' }
  ];

  selectedCricketer: Cricketer | null = null;

  onEdit(cricketer: Cricketer) {
    this.selectedCricketer = { ...cricketer };
  }

  onDelete(cricketer: Cricketer) {
    this.cricketers = this.cricketers.filter(c => c.no !== cricketer.no);
    this.selectedCricketer = null;
  }

  updateCricketer(updatedCricketer: Cricketer) {
    const index = this.cricketers.findIndex(c => c.no === updatedCricketer.no);
    if (index > -1) {
      this.cricketers[index] = updatedCricketer;
    }
    this.selectedCricketer = null;
  }
}
