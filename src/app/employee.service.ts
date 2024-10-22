import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' },
    // Add more employee data as needed
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}
