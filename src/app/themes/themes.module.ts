import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemesRouterModule } from './themes-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeSelectListComponent } from './components/theme-select-list/theme-select-list.component';

@NgModule({
  declarations: [
    ThemeSelectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesRouterModule,
  ],
  exports: [ThemeSelectListComponent]
})
export class ThemesModule { }
