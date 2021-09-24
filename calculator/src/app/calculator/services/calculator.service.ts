/**
 * Detects operation
 * @author Luca A.R.
 * @since 1.0.0
*/


import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  /**
   * Define variables
   */

  static readonly SUM: string = '+'
  static readonly SUB: string = '-'
  static readonly DIV: string = '/'
  static readonly MULT: string = '*'
  static readonly SQR: string = 'sqrt'
  static readonly POW2: string = 'pow2'
  static readonly POW3: string = 'pow3'

  constructor() { }
  /**
   * This method do the logic and math 
   * that will be sent from our 
   * calculator page.
   * 
   * @param num1 number
   * @param num2 number
   * @param operation that will be executed
   * @returns retuns the final result
   */


  calculate(num1: number, num2: number, operation: string): number {
    let result: number;

    switch (operation) {
      case CalculatorService.SUM:
        result = num1 + num2;
        break;

      case CalculatorService.SUB:
        result = num1 - num2;
        break;

      case CalculatorService.DIV:
        result = num1 / num2
        break;

      case CalculatorService.MULT:
        result = num1 * num2
        break;

      case CalculatorService.SQR:
        result = Math.sqrt(num1);
        break;

      case CalculatorService.POW2:
        result = Math.pow(num1, 2);
        break;

      case CalculatorService.POW3:
        result = Math.pow(num1, 3);
        break;

      default:
        result = 0
        break;
    }
    return result
  }
}

