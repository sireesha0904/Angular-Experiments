import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  showProfile: boolean = true;
  textcolor: string = "black";
  userName: string = "Modi Sireesha";
  userAge: number = 220101120146;
  friends: string[] = ["Siri", "gayatri", "kishore"];

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  changeColor() {
    this.textcolor = this.textcolor === "black" ? "purple" : "black";
  }
}
