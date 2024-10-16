import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-checker',
  standalone: true,
  templateUrl: './number-checker.component.html',
  styleUrls: ['./number-checker.component.css'],
  imports: [CommonModule,FormsModule]
})
export class NumberCheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
}
