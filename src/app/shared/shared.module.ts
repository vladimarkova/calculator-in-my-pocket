import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CutNNumbersAfterSymbolFromStringPipe } from './pipes/cut-n-numbers-after-symbol-from-string.pipe';
import { ReplaceSymbolWithAnotherSymbolPipe } from './pipes/replace-symbol-with-another-symbol.pipe';

const exportedComponents = [ButtonComponent];
const exportedPipes = [CutNNumbersAfterSymbolFromStringPipe, ReplaceSymbolWithAnotherSymbolPipe];

@NgModule({
  declarations: [
    ButtonComponent,
    CutNNumbersAfterSymbolFromStringPipe,
    ReplaceSymbolWithAnotherSymbolPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...exportedComponents, ...exportedPipes]
})
export class SharedModule { }
