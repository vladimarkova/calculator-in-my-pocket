import { Action, createReducer, on } from '@ngrx/store';
import { Theme } from '../models/theme';
import * as themeActions from '../actions/theme';

export interface ThemeState {
  themes: Theme[] | null;
  totalCount: number;
  loading: boolean;
  error: any;
}

const initialState: ThemeState = {
  themes: null,
  totalCount: 0,
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

  on(themeActions.clearThemes, () => ({ ...initialState }))
);

export function reducer(state: ThemeState | undefined, action: Action) {
  return themeReducer(state, action);
}
