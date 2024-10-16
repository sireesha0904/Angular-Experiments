import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule]
})
export class LoginComponent {
  loginAttempts: number = 0; 
  errorMessage: string = ''; 

  onLogin(): void {
    this.loginAttempts++; 

    if (this.loginAttempts >= 3) {
      this.errorMessage = 'You have entered three times. Please try again later.';
    } else {
      this.errorMessage = ` Attempt ${this.loginAttempts} of 3.`;
    }
  }
}
