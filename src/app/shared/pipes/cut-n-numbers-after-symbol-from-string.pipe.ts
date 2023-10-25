import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutNNumbersAfterSymbolFromString'
})
export class CutNNumbersAfterSymbolFromStringPipe implements PipeTransform {
  // example input: (12.3456905, 3, '.') --> example output: 12.345

  transform(value: string, numbersAfterSymbol: number, specificSymbol: string): string {
    const index = value.indexOf(specificSymbol);

    if (index !== -1) {
      const result = value.substring(index - numbersAfterSymbol, numbersAfterSymbol + (numbersAfterSymbol + 1));
      return result;
    } else {
      return value;
    }
  }

}
