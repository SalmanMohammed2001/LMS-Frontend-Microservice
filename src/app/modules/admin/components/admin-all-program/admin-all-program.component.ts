import { Component } from '@angular/core';

import {ProgramWidgetComponent} from "../../../core/widget/program-widget/program-widget.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-admin-all-program',
  standalone: true,
  imports: [
    ProgramWidgetComponent,
    ProgramWidgetComponent,
    MatButton
  ],
  templateUrl: './admin-all-program.component.html',
  styleUrl: './admin-all-program.component.scss'
})
export class AdminAllProgramComponent {

}
