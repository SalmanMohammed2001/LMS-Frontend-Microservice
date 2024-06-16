import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-my-programe',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './user-my-programe.component.html',
  styleUrl: './user-my-programe.component.scss'
})
export class UserMyProgrameComponent {

  date=new Date()
}
