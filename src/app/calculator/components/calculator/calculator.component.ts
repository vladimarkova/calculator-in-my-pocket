import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Theme } from 'src/app/+store/models/theme';
import { SymbolType } from '../../enums';

const OPERATIONS = ['+', '-', '*', '/', '='];

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

  isUndoImplemented: boolean = false;

  charactersToCutAfterDecimal = 15;

  get result() {
    if (!this.memory) {
      return '0';
    }
    if (this.memory.find(el => el === 'NaN')) {
      return 'NaN';
    }
    return this.memory[2] ? this.memory[2]: this.memory[0];
  }
  symbolType = SymbolType;

  queryParams$ = this.route.queryParams;
  selectThemeListVisible$ = this.queryParams$.pipe(map(params => !params ? false : params?.['select-theme-list'] === "true"));

  themeToApply: Theme | null = null;
  get dynamicBgColor(): string {
    return this.themeToApply?.mainBgColorHex || '#8076a3';
  }
  get dynamicHighlightColor(): string {
    return this.themeToApply?.highlightColorHex || '#9bc400';
  }
  get dynamicTextColor(): string {
    return this.themeToApply?.textColorHex || '#ffffff';
  }

  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }

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
    return this.memory?.find(el => OPERATIONS.includes(el));
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

  applyTheme({ theme } : { theme: Theme }) {
    this.themeToApply = { ...theme };
  }

  setBackgroundColor(element: HTMLElement, color: string) {
    this.renderer.setStyle(element, 'background-color', color);
  }
}
