import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IListResponse } from 'src/app/shared/interfaces';
import { Theme } from 'src/app/+store/models/theme';
import { environment } from 'src/environments/environment';

const baseUrl = environment.url;

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

  constructor(private httpClient: HttpClient) { }

  loadThemes(): Observable<IListResponse<Theme>> {
    const url = `${baseUrl}theme`;

    return this.httpClient.get<IListResponse<Theme>>(url);
  }
}
