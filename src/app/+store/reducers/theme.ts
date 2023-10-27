import { Action, createReducer, on } from '@ngrx/store';
import { Theme } from '../models/theme';
import * as themeActions from '../actions/theme';

export interface ThemeState {
  themes: Theme[] | null;
  totalCount: number;
  selectedTheme: Theme | null;
  loading: boolean;
  error: any;
}

const initialState: ThemeState = {
  themes: null,
  totalCount: 0,
  selectedTheme: null,
  loading: false,
  error: null,
};

export const themeReducer = createReducer(
  initialState,
  on(themeActions.loadThemes, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(themeActions.loadThemesSuccess, (state, { themes }) => ({
    ...state,
    themes,
    loading: false,
  })),
  on(themeActions.loadThemesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(themeActions.clearThemes, (state) => ({ ...initialState, selectedTheme: state.selectedTheme })),

  on(themeActions.saveTheme, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(themeActions.saveThemeSuccess, (state, { theme }) => ({
    ...state,
    themes: state.themes ? (state.themes.map(t => t.id === theme.id ? theme : t)) : [theme],
    totalCount: state.themes ? (!state.themes.find(t => t.id === theme.id) ? state.totalCount : state.totalCount + 1) : 0,
    loading: false,
  })),
  on(themeActions.saveThemeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(themeActions.deleteTheme, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(themeActions.deleteThemeSuccess, (state, { theme }) => ({
    ...state,
    themes: state.themes ? state.themes.filter(t => t.id !== theme.id) : state.themes,
    totalCount: state.totalCount ? state.totalCount - 1 : state.totalCount,
    loading: false,
  })),
  on(themeActions.deleteThemeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(themeActions.selectTheme, (state, { id }) => ({
    ...state,
    selectedTheme: state.themes ? (state.themes.find(t => t.id === id) ?? null) : null,
  })),

  on(themeActions.clearSelectedTheme, (state) => ({
    ...state,
    selectedTheme: initialState.selectedTheme,
  }))
);

export function reducer(state: ThemeState | undefined, action: Action) {
  return themeReducer(state, action);
}
