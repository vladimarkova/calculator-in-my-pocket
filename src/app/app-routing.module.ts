import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calculator',
    loadChildren: () => import ('./calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'themes',
    loadChildren: () => import ('./themes/themes.module').then(m => m.ThemesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
