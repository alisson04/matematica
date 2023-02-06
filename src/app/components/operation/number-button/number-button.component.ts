import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent {

  @Input() value = '';

  answerOperation(value: string) {

  }
}
