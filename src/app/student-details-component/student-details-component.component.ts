import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details-component.component.html',
  styleUrl: './student-details-component.component.css'
})
export class StudentDetailsComponentComponent {
  students = [
    { rollNumber: '101', name: 'John Doe', marks: 85, subject: 'Mathematics' },
    { rollNumber: '102', name: 'Jane Smith', marks: 92, subject: 'Physics' },
    { rollNumber: '103', name: 'Peter Parker', marks: 78, subject: 'Chemistry' }
  ];

  selectedStudent: any = null;

  onSelectRollNumber(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedRollNumber = target.value;

    this.selectedStudent = this.students.find(student => student.rollNumber === selectedRollNumber) || null;
  }
}
