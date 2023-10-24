import { Component } from '@angular/core';
import { SymbolType } from '../../enums';

const operations = ['+', '-', '*', '/', '='];

export interface IInputType {
  type: SymbolType,
  value: string;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  memory: string[] | null = null;

  largeFont: string = '3rem';
  smallFont = '1.5rem';

  get result() {
    if (!this.memory) {
      return '0';
    }
    if (this.memory.find(el => el === 'NaN')) {
      return 'NaN';
    }
    // TODO: use pipe in htmls

    return this.memory[2] ?
      this.cutString(this.memory[2], '.').replace('.', ','):
      this.cutString(this.memory[0], '.').replace('.', ',');
  }

  symbolType = SymbolType;

  constructor() { }

  cutString(value: string, specificSymbol: string) {
    const index = value.indexOf(specificSymbol);

    if (index !== -1) {
      const result = value.substring(index - 15, index + 16);
      return result;
    } else {
      return value;
    }
  }

  handleButtonClick(input: IInputType) {
    const { type, value } = input;
    if (type === SymbolType.CLEAR) {
      this.memory = null;
      return;
    }
    if (!this.memory) {
      if (type === SymbolType.OPERATION) {
        return;
      }
      this.memory = [value];
      return;
    }
    if (this.memory[0] === '0' && !this.memory[0].includes('.') && value === '0') {
      return;
    }
    if (this.memory[2] && this.memory[2] === '0' && !this.memory[2].includes('.') && value === '0') {
      return;
    }
    if (this.memory[0]?.includes('.') && !this.memory[1] && !this.memory[2] && type === SymbolType.DECIMAL_POINT) {
      return;
    }
    if (this.memory[2]?.includes('.') && type === SymbolType.DECIMAL_POINT) {
      return;
    }
    if (this.memory[2] && type === SymbolType.OPERATION) {
      this.calculate();
      if (value !== '=') {
        this.memory[1] = value;
      }
      return;
    }
    if (!this.memoryIncludesOperation()) {
      if (type === SymbolType.OPERATION) {
        this.memory[1] = value;
        return;
      }
      this.addDigitToMemory(value, 'left');
    } else {
      if (type !== SymbolType.OPERATION) {
        this.addDigitToMemory(value, 'right');
      } else {
        if (value !== '=') {
          this.memory[1] = value;
        }
        this.calculate();
      }
    }
  }

  memoryIncludesOperation() {
    return this.memory?.find(el => operations.includes(el));
  }

  addDigitToMemory(digit: string, side: string) {
    // , (decimal point) also is added here
    if (!this.memory) {
      this.memory = [digit];
      if (this.memory[0] === '.') {
        this.memory[0] = '0.';
      }
      return;
    }
    if (side === 'left') {
      if (!this.memory?.[0] || this.memory[0] === '0') {
        this.memory[0] = digit === '.' ? '0.' : digit;
        return;
      }
      const current = this.memory[0];
      this.memory[0] = current + digit;
    } else {
      if (this.memory[2] === '.') {
        this.memory[2] = '0.';
        return;
      }
      if (!this.memory?.[2] || this.memory[2] === '0') {
        this.memory[2] = digit === '.' ? '0.' : digit;
        return;
      }
      const current = this.memory![2];
      this.memory![2] = current + digit;
    }
  }

  undoLast() {
    console.log('Implement me...!');
  }

  calculate() {
    if (!this.memory || !this.memory?.[0] || !this.memory?.[1] || !this.memory?.[2]) {
      return;
    }
    let result: number | string = 0;
    const left = parseFloat(this.memory[0]);
    const right = parseFloat(this.memory[2]);

    const op = this.memory[1];

    if (op === '/') {
      if (right !== 0) {
        result = left / right;
      } else {
        result = 'NaN';
      }
    }

    switch (op) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
        break;
    }

    this.memory = [result.toString()];
  }
}
