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
    { id: 1, firstName: 'Sireesha', lastName: 'Modi', emailId: 'modisireesha09@gmail.com' },
    { id: 2, firstName: 'Gayatri', lastName: 'pisya', emailId: 'gayatripisya@gmail.com' },
    { id: 3, firstName: 'Kishore babu', lastName: 'Tulugu', emailId: 'tulugukishorebabu@gmail.com' },
   
    
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}
