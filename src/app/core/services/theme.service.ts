import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  loadThemes() {
    return [{ id: '1', title: 'Great' }, { id: '2', title: 'Superb' }];
  }
}
