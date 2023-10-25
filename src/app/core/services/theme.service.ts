import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const mockThemes = [
  { id: '1',
    mainBgColorHex: '#fff',
    textColorHex: '#8d61ae',
    highlightColorHex: '#95c852',
  },
  { id: '2',
    mainBgColorHex: '#454545',
    textColorHex: '#fff',
    highlightColorHex: '##31a617',
  }
];
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  loadThemes() {
    return of(mockThemes);
  }
}
