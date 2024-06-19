import { Component } from '@angular/core';

import {ProgramWidgetComponent} from "../../../core/widget/program-widget/program-widget.component";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NewSubjectComponent} from "../admin-subject/inner-item/new-subject/new-subject.component";
import {NewProgramComponent} from "./inner-item/new-program/new-program.component";

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

  constructor(private matDialog:MatDialog) {
  }

  openNewProgramForm(){

    let modelData=  this.matDialog.open(NewProgramComponent,{
      width:'500px',
      disableClose:true
    })
    modelData.afterClosed().subscribe(response=>{
      if(response ===true){
        //load all program
      }
    })
  }
}
