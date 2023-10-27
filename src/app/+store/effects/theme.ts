import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ThemeService } from 'src/app/core/services/theme.service';
import { IListResponse } from 'src/app/shared/interfaces';

import * as themeActions from '../actions/theme';
import { Theme } from '../models/theme';

@Injectable()
export class ThemeEffects {
  private saveThemeRequest(theme: Partial<Theme> | Theme): Observable<Theme> {
    if (theme.id) {
      return this.themeService.editTheme(theme as Theme);
    }
    return this.themeService.createTheme(theme);
  }

  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeActions.loadThemes),
      switchMap(() =>
        this.themeService.loadThemes().pipe(
          map((listResponse: IListResponse<Theme>) => {
            const themes: Theme[] = listResponse.entries;
            const totalCount: number = listResponse.count;
            return themeActions.loadThemesSuccess({ themes, totalCount });
          }),
          catchError((error) => of(themeActions.loadThemesFailure({ error })))
        )
      )
    )
  );

  saveTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeActions.saveTheme),
      switchMap(({ theme }) =>
        this.saveThemeRequest(theme).pipe(
          map((savedTheme) =>
            themeActions.saveThemeSuccess({ theme: savedTheme })
          ),
          catchError((error) => of(themeActions.saveThemeFailure({ error })))
        )
      )
    )
  );

  deleteTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeActions.deleteTheme),
      switchMap(({ id }) =>
        this.themeService.deleteTheme(id).pipe(
            map((theme) => themeActions.deleteThemeSuccess({ theme })),
            catchError((error) => of(themeActions.deleteThemeFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private themeService: ThemeService) {}
}
