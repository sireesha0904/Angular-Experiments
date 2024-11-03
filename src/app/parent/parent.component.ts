import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  parentMessage: string = 'Message from Parent to Child';
  messageFromChild: string = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent; // Using ViewChild to access ChildComponent

  ngAfterViewInit() {
    // Access child's method after view initialization
    const childMessage = this.childComponent.childMessage;
    console.log('Child Message:', childMessage);
  }

  // Method to receive message from child
  receiveMessage(event: string) {
    this.messageFromChild = event;
  }
}
