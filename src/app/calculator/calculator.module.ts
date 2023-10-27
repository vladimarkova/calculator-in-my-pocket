import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ThemesModule } from '../themes/themes.module';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorRouterModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    ThemesModule,
    CalculatorRouterModule,
  ]
})
export class CalculatorModule { }
