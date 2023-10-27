import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { clearSelectedTheme, deleteTheme, loadThemes, saveTheme, selectTheme } from 'src/app/+store/actions/theme';
import { selectSelectedTheme, selectThemes, selectThemesError, selectThemesLoading, selectTotalCount } from 'src/app/+store/selectors/theme';
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
export class CalculatorComponent implements OnInit {
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

  themes$ = this.themeStore.select(selectThemes);
  totalCount$ = this.themeStore.select(selectTotalCount);
  loading$ = this.themeStore.select(selectThemesLoading);
  error$ = this.themeStore.select(selectThemesError);

  selectedTheme$ = this.themeStore.select(selectSelectedTheme);

  constructor(private themeStore: Store) { }

  ngOnInit(): void {
    this.themeStore.dispatch(loadThemes());

    this.themes$.pipe(filter(v => !!v), take(1)).subscribe(themes => {
      if (themes?.[2]) {
        console.log(themes[2]);
        const updatedTheme = { ...themes[2], title: `${themes[2].title} EDITED` };
        // this.themeStore.dispatch(saveTheme({ theme: updatedTheme }));
        this.themeStore.dispatch(selectTheme({ id: themes[2].id }));
        setTimeout(() => this.themeStore.dispatch(clearSelectedTheme()), 5000);
      }
      if (themes?.[3]) {
        // this.themeStore.dispatch(deleteTheme({ id: themes[3].id }));
      }
    })

    const newTheme = {
      title: 'GreenApple',
      mainBgColorHex: '#eca3cb',
      textColorHex: '#ffffff',
      highlightColorHex: '##003366',
      editable: true
    }
    // this.themeStore.dispatch(saveTheme({ theme: newTheme }));
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
}
