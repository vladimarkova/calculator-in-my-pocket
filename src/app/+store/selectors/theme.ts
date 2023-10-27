import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ThemeState } from '../reducers/theme';

const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectThemes = createSelector(selectThemeState, (state) => state.themes);
export const selectTotalCount = createSelector(selectThemeState, (state) => state.totalCount);
export const selectSelectedTheme = createSelector(selectThemeState, (state) => state.selectedTheme);
export const selectThemesLoading = createSelector(selectThemeState, (state) => state.loading);
export const selectThemesError = createSelector(selectThemeState, (state) => state.error);
