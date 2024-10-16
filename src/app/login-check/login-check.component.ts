import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-check',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-check.component.html',
  styleUrl: './login-check.component.css'
})
export class LoginCheckComponent {
  role: number = 4; 
  getColor(): string {
    switch (this.role) {
      case 1:
        return 'green'; 
      case 2:
        return 'blue'; 
      case 3:
        return 'orange';
      case 4:
        return 'purple'; 
      default:
        return 'red'; 
    }
  }
}
