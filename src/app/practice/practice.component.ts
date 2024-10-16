import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {

  title : string = "Hello Angular!"
  user = {name : "Sireesha" , age : 20}
}
