import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NewSubjectComponent} from "./inner-item/new-subject/new-subject.component";

@Component({
  selector: 'app-admin-subject',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './admin-subject.component.html',
  styleUrl: './admin-subject.component.scss'
})
export class AdminSubjectComponent {

  constructor(private matDialog:MatDialog) {
  }

  openNewSubjectForm(){

  let modelData=  this.matDialog.open(NewSubjectComponent,{
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
