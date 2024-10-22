import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
