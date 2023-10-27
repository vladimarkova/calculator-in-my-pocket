import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
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
    let params = new HttpParams().set('limit', 10).append('offset', 0);
    return this.httpClient.get<IListResponse<Theme>>(url, { params });
  }

  createTheme(theme: Partial<Theme>): Observable<Theme> {
    return this.httpClient.post<Theme>('theme', theme);
  }

  editTheme(theme: Theme): Observable<Theme> {
    return this.httpClient.put<Theme>(`theme/${theme.id}`, theme);
  }

  deleteTheme(id: string): Observable<Theme> {
    return this.httpClient.delete<Theme>(`theme/${id}`);
  }
}
