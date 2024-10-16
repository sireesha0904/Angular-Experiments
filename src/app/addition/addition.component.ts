import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  result: number | string = '';
  calculate(operation: string, num1: string, num2: string) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        this.result = number1 + number2;
        break;
      case 'subtract':
        this.result = number1 - number2;
        break;
      case 'multiply':
        this.result = number1 * number2;
        break;
      case 'divide':
        if (number2 !== 0) {
          this.result = number1 / number2;
        } else {
          this.result = 'Cannot divide by zero';
        }
        break;
      default:
        this.result = 'Invalid operation';
    }
  } 
}
