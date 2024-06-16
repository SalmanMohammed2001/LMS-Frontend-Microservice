import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-new-subject',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './new-subject.component.html',
  styleUrl: './new-subject.component.scss'
})
export class NewSubjectComponent {

}
