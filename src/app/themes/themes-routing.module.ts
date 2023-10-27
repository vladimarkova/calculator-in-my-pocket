import { Route, RouterModule } from "@angular/router";
import { ThemeSelectListComponent } from "./components/theme-select-list/theme-select-list.component";

const routes: Route[] = [
  // {
  //   path: '',
  //   component: ThemeSelectListComponent
  // },
];

export const ThemesRouterModule = RouterModule.forChild(routes);
