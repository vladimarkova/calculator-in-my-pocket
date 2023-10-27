import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ThemeService } from 'src/app/core/services/theme.service';
import { IListResponse } from 'src/app/shared/interfaces';

import * as themeActions from '../actions/theme';
import { Theme } from '../models/theme';

@Injectable()
export class ThemeEffects {
  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeActions.loadThemes),
      mergeMap(() =>
        this.themeService.loadThemes().pipe(
          map((listResponse: IListResponse<Theme>) => {
            const themes: Theme[] = listResponse.entries;
            const totalCount: number = listResponse.count;
            return themeActions.loadThemesSuccess({ themes, totalCount })
          }),
          catchError((error) => of(themeActions.loadThemesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private themeService: ThemeService) {}
}
