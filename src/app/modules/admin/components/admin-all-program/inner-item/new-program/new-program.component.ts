import {Component, model} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatCalendar, MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-new-program',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatDialogTitle,
    MatCard,
    MatCalendar,
    MatCardModule, MatDatepickerModule
  ],
  templateUrl: './new-program.component.html',
  styleUrl: './new-program.component.scss'
})
export class NewProgramComponent {
  selected = model<Date | null>(null);
}
