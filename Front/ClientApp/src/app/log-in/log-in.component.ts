import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent extends BaseComponent {
  @Output() close = new EventEmitter<boolean>();
}
