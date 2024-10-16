import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule]
})
export class FormComponent {
  title: string = 'Data Binding';
  name: string = '';
  age: number = 0;
  counter: number = 0;

  handleSubmit(event: Event) {
    event.preventDefault(); 
    this.incrementCounter(); 
  }
  incrementCounter() {
    this.counter++;
  }
}
