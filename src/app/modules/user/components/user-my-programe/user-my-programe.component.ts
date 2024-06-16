import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-my-programe',
  standalone: true,
  imports: [
    DatePipe,
    ProgramWidgetComponent
  ],
  templateUrl: './user-my-programe.component.html',
  styleUrl: './user-my-programe.component.scss'
})
export class UserMyProgrameComponent {


}
