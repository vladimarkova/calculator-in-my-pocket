import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IListResponse } from 'src/app/shared/interfaces';
import { Theme } from 'src/app/+store/models/theme';
import { environment } from 'src/environments/environment';

const baseUrl = environment.url;

const mockThemes = [
  { id: '1',
    title: 'LightBlue',
    mainBgColorHex: '#fff',
    textColorHex: '#8d61ae',
    highlightColorHex: '#95c852',
  },
  { id: '2',
    title: 'DarkOrange',
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
    let params = new HttpParams().set('limit', 10).append('offset', 0);
    return this.httpClient.get<IListResponse<Theme>>(`${baseUrl}theme`, { params });
  }

  createTheme(theme: Partial<Theme>): Observable<Theme> {
    return this.httpClient.post<Theme>(`${baseUrl}theme`, theme);
  }

  editTheme(theme: Theme): Observable<Theme> {
    return this.httpClient.put<Theme>(`${baseUrl}theme/${theme.id}`, theme);
  }

  deleteTheme(id: string): Observable<Theme> {
    return this.httpClient.delete<Theme>(`${baseUrl}theme/${id}`);
  }
}
