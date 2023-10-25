import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSymbolWithAnotherSymbol'
})
export class ReplaceSymbolWithAnotherSymbolPipe implements PipeTransform {

  transform(value: string, symbolToReplace: string, symbolToReplaceWith: string): string {
    return value.replace(symbolToReplace, symbolToReplaceWith);
  }

}
