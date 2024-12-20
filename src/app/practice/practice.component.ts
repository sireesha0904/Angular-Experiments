import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {

  title : string = "Hello Angular!"
  user = {name : "Sireesha" , age : 20}

  imageUrl = "https://th.bing.com/th/id/OIP.CkvQxlvUO1XWC_G8cwrttgHaDr?rs=1&pid=ImgDetMain";
  isButtonDisble = true;

  message = " ";

  onButtonClick() {
    this.message = "Button is Clicked";
  }


  isActive : boolean = false;

  toggleActive () {
    this.isActive =!this.isActive;
  }
}
