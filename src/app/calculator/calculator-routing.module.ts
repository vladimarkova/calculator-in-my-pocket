import { Route, RouterModule } from "@angular/router";
import { CalculatorComponent } from "./components/calculator/calculator.component";

const routes: Route[] = [
  {
    path: '',
    component: CalculatorComponent
  },
];

export const CalculatorRouterModule = RouterModule.forChild(routes);
