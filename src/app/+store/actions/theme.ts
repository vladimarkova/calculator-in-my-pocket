import { createAction, props } from '@ngrx/store';
import { Theme } from '../models/theme';

export const loadThemes = createAction('[Theme] Load Themes');
export const loadThemesSuccess = createAction('[Theme] Load Themes Success', props<{ themes: Theme[], totalCount: number }>());
export const loadThemesFailure = createAction('[Theme] Load Themes Failure', props<{ error: any }>());

export const clearThemes = createAction('[Theme] Clear Themes');
