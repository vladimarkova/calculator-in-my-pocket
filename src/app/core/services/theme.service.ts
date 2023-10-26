import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of, take } from 'rxjs';

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
  private backendUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    const url = `${this.backendUrl}/api/theme`;

    const result = this.httpClient.get<any>(url);
    result.pipe(take(1)).subscribe(r => {
      console.log('result: ', result);
    })
    return of(mockThemes);
  }
}
