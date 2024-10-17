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

  showDetails : boolean = true;

  toggleDetails() {
    this.showDetails =!this.showDetails;
  }
 
  Students = ["Sireesha", "Gayatri", "Kishore"]

  color : string = "red";
}
