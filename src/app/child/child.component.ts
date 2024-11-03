import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @Input() childMessage: string = ''; 
  @Output() messageEvent = new EventEmitter<string>(); 

  @ContentChild('projectedContent') projectedContent!: ElementRef; 

  ngAfterContentInit() {
 
    console.log('Projected Content:', this.projectedContent.nativeElement.textContent);
  }

  sendMessageToParent() {
    this.messageEvent.emit('Message from Child');
  }
}
