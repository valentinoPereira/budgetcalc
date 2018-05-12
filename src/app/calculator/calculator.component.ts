import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  workingDaysPerMonth: number;

  incomePerMonth: number;
  incomePerYear: number;

  expensePerDay: number;
  expensePerMonth: number;
  expenseSpecial: number;
  expensePerYear: number;

  savingPerMonth: number;
  savingPerYear: number;

  constructor() { }

  ngOnInit() {
    this.expenseSpecial = this.workingDaysPerMonth = this.expensePerDay = this.incomePerMonth = 0;
    this.calc();
  }

  calc() {
    this.expensePerMonth = this.expensePerDay * this.workingDaysPerMonth;
    this.savingPerMonth = this.incomePerMonth - this.expensePerMonth;
    this.savingPerYear = (this.savingPerMonth * 12) - this.expenseSpecial;

    this.expensePerYear = this.expensePerMonth * 12 + this.expenseSpecial;
    this.incomePerYear = this.incomePerMonth * 12;
  }
}
