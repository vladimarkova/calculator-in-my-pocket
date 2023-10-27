import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadThemes } from 'src/app/+store/actions/theme';
import { selectSelectedTheme, selectThemes, selectThemesError, selectThemesLoading, selectTotalCount } from 'src/app/+store/selectors/theme';

@Component({
  selector: 'app-theme-select-list',
  templateUrl: './theme-select-list.component.html',
  styleUrls: ['./theme-select-list.component.scss']
})
export class ThemeSelectListComponent implements OnInit {
  themes$ = this.themeStore.select(selectThemes);
  totalCount$ = this.themeStore.select(selectTotalCount);
  loading$ = this.themeStore.select(selectThemesLoading);
  error$ = this.themeStore.select(selectThemesError);

  selectedTheme$ = this.themeStore.select(selectSelectedTheme);

  constructor(private themeStore: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.themeStore.dispatch(loadThemes());
  }
}
