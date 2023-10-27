import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription, take } from 'rxjs';
import { loadThemes, selectTheme } from 'src/app/+store/actions/theme';
import { selectSelectedTheme, selectThemes, selectThemesError, selectThemesLoading, selectTotalCount } from 'src/app/+store/selectors/theme';

@Component({
  selector: 'app-theme-select-list',
  templateUrl: './theme-select-list.component.html',
  styleUrls: ['./theme-select-list.component.scss']
})
export class ThemeSelectListComponent implements OnInit, OnDestroy {
  themes$ = this.themeStore.select(selectThemes);
  totalCount$ = this.themeStore.select(selectTotalCount);
  loading$ = this.themeStore.select(selectThemesLoading);
  error$ = this.themeStore.select(selectThemesError);

  selectedTheme$ = this.themeStore.select(selectSelectedTheme);
  sub!: Subscription;

  constructor(private themeStore: Store, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.themeStore.dispatch(loadThemes());
    this.sub = this.selectedTheme$.subscribe(selectedTheme => {
      const queryParams = this.router.parseUrl(this.router.url).queryParams;
      const id = queryParams['theme']
      if (!selectedTheme && id) {
        this.router.navigate([], {relativeTo: this.activatedRoute});
      }
    })
  }

  applyTheme(id: string){
    this.themeStore.dispatch(selectTheme({ id }));
    this.addThemeIdToParams(id);
  }

  addThemeIdToParams(id: string) {
    const currentUrl = this.router.url;
    const queryParams = this.router.parseUrl(currentUrl).queryParams;
    queryParams['theme'] = id;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
