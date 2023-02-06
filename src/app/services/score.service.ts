import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  totalCorrect: number = 0;
  totalWrong: number = 0;

  getCorrect(): number {
    return this.totalCorrect;
  }
  addWrong(): number {
    return this.totalCorrect;
  }

  addCorrect() {
    this.totalCorrect++;
  }
  addWrong() {
    this.totalWrong++;
  }
}
