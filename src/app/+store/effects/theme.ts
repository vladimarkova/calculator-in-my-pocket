import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ThemeService } from 'src/app/core/services/theme.service';

import * as themeActions from '../actions/theme';

@Injectable()
export class ThemeEffects {
  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeActions.loadThemes),
      mergeMap(() =>
        this.themeService.loadThemes().pipe(
          map((themes) => {
            return themeActions.loadThemesSuccess({ themes })
          }),
          catchError((error) => of(themeActions.loadThemesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private themeService: ThemeService) {}
}
