import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

const exportedComponents = [ButtonComponent];

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...exportedComponents]
})
export class SharedModule { }
