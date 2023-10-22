import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorRouterModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CalculatorRouterModule,
  ]
})
export class CalculatorModule { }
