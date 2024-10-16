
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class MenuComponent {
  programmingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'C++', 'Angular'];
  selectedLanguage: string = ''; 
}
