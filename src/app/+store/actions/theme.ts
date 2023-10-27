import { createAction, props } from '@ngrx/store';
import { Theme } from '../models/theme';


// Load themes
export const loadThemes = createAction('[Theme] Load Themes');
export const loadThemesSuccess = createAction('[Theme] Load Themes Success', props<{ themes: Theme[], totalCount: number }>());
export const loadThemesFailure = createAction('[Theme] Load Themes Failure', props<{ error: any }>());

export const clearThemes = createAction('[Theme] Clear Themes');

// Save theme
export const saveTheme = createAction('[Theme] Save Theme', props<{ theme: Partial<Theme> | Theme }>());
export const saveThemeSuccess = createAction('[Theme] Save Theme Success', props<{ theme: Theme }>());
export const saveThemeFailure = createAction('[Theme] Save Theme Failure', props<{ error: any }>());

// Delete theme
export const deleteTheme = createAction('[Theme] Delete Theme', props<{ id: string }>());
export const deleteThemeSuccess = createAction('[Theme] Delete Theme Success', props<{ theme: Theme }>());
export const deleteThemeFailure = createAction('[Theme] Delete Theme Failure', props<{ error: any }>());

// Select theme
export const selectTheme = createAction('[Theme] Select Theme', props<{ id: string }>());

export const clearSelectedTheme = createAction('[Theme] Clear Selected Theme');
