import { Component } from '@angular/core';
import { OperationService } from '../services/operation.service';
import {Operation} from "./operation";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {

  operation: Operation = { label: '', result: 0 }
  operations: Operation[] = [];
  answer = ''
  control = {
    labelCorrect: false,
    labelWrong: false,
    totalWrongOperations: 0,
    totalCorrectOperations: 0,
    numbersButtons: [1,2,3,4,5,6,7,8,9,0]
  }

  constructor(private service: OperationService) { }

  ngOnInit(): void {
    this.operation = this.service.getNewOperation();
    this.updateScores();
  }
  updateScores():void {
    this.service.listCorrectOperations().subscribe((list) => {
      this.control.totalCorrectOperations = list.length
    });

    this.service.listWrongOperations().subscribe((list) => {
      this.control.totalWrongOperations = list.length
    });
  }

  checkOperation(value: string) {
    this.answer += value;

    const result = this.operation.result.toString();

    if (this.answer === result) {
      this.control.totalCorrectOperations++;
      this.service.addCorrectOperation(this.operation).subscribe((operation) => {
        this.updateScores();
      });
      this.answer = '';
      this.operation = this.service.getNewOperation();
    }

    for (let i = 0; i < this.answer.length; i++) {
      if (this.answer[i] !== result[i]) {
        this.service.addWrongOperation(this.operation).subscribe((operation) => {
          this.updateScores();
        });
        this.answer = '';
        break;
      }
    }
  }
}

