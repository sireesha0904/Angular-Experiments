import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-toggler',
  standalone: true,
  templateUrl: './text-toggler.component.html',
  styleUrls: ['./text-toggler.component.css'],
  imports: [CommonModule]
})
export class TextTogglerComponent {
  isTextVisible: boolean = true;

  enableText(): void {
    this.isTextVisible = true;
  }

  disableText(): void {
    this.isTextVisible = false;
  }
}
