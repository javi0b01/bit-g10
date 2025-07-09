import { Component, inject, OnInit } from '@angular/core';
import { Students } from '../../../services/students';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private studentsService = inject(Students);

  students!: any[];

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe((res: any) => {
      this.students = res.data;
      console.log('students:', this.students);
    });
  }
}
