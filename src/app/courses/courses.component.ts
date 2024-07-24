import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass',
})
export class CoursesComponent {}
