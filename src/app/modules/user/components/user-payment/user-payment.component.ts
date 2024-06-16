import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-payment',
  standalone: true,
    imports: [
        ProgramWidgetComponent
    ],
  templateUrl: './user-payment.component.html',
  styleUrl: './user-payment.component.scss'
})
export class UserPaymentComponent {

}
