import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frontend-connection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './frontend-connection.component.html',
  styleUrls: ['./frontend-connection.component.css']
})
export class FrontendConnectionComponent implements OnInit {
  employees: any[] = [];
  newEmployee = { name: '', position: '', salary: 0 };
  editingEmployee: any = null;

  private apiUrl = 'http://localhost:8080/api/employees';  // Backend API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.http.post(this.apiUrl, this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = { name: '', position: '', salary: 0 };  // Reset form
    });
  }

  editEmployee(employee: any): void {
    this.editingEmployee = { ...employee };
  }

  updateEmployee(): void {
    if (this.editingEmployee) {
      this.http.put(`${this.apiUrl}/${this.editingEmployee.id}`, this.editingEmployee).subscribe(() => {
        this.loadEmployees();
        this.editingEmployee = null;  // Clear edit mode
      });
    }
  }

  deleteEmployee(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.loadEmployees();
    });
  }
}
