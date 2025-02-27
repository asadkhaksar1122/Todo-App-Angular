import { Component, Input, input } from '@angular/core';
import { AlertType } from '../type';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() alertshow: AlertType | null=null;
}
