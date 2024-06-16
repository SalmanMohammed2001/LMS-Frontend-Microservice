import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-contex',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './admin-contex.component.html',
  styleUrl: './admin-contex.component.scss'
})
export class AdminContexComponent {

}
