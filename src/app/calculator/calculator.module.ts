import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorRouterModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CalculatorRouterModule,
  ]
})
export class CalculatorModule { }
