import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


}



