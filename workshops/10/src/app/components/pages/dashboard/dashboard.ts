import { Component, inject, OnInit } from '@angular/core';
import { Students } from '../../../services/students';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private studentsService = inject(Students);

  userName!: string;
  students!: any[];

  ngOnInit(): void {
    const token: any = localStorage.getItem('token');
    const tokenDecoded = jwtHelperService.decodeToken(token);
    this.userName = tokenDecoded.name;

    this.studentsService.getAllStudents().subscribe((res: any) => {
      this.students = res.data;
      console.log('students:', this.students);
    });
  }
}
