import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-all-programe',
  standalone: true,
    imports: [
        ProgramWidgetComponent
    ],
  templateUrl: './user-all-programe.component.html',
  styleUrl: './user-all-programe.component.scss'
})
export class UserAllProgrameComponent {

}
