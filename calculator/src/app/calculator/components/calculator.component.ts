import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operation: string;
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.clear()
  }

  clear(): void {
    this.num1 = "0";
    this.num2 = null
    this.result = null
    this.operation = null
  }

  concatNumber(num: string, numConcat: string): string {
    if (num === '0' || num === null) {
      num = '';
    }
    if (numConcat === '.' && num === '') {
      return '0.';
    }
    if (numConcat === '.' && num.indexOf('.') > -1) {
      return num;
    }
    return num + numConcat;
  }

  addNumber(num: string): void {
    if (this.operation === null) {
      this.num1 = this.concatNumber(this.num1, num)
    } else {
      this.num2 = this.concatNumber(this.num2, num)
    }
  }

  defineOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.num2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operation);

      this.operation = operation;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.num2 === null) {
      this.num2 = "0";
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operation);
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }

    if (this.num2 !== null) {
      return this.num2;
    }

    return this.num1;
  }
}

