import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ICookie } from 'src/app/components/cookies/models/cookie.model';
import { ICookies } from 'src/app/components/cookies/models/cookies.model';

@Injectable({
  providedIn: 'root',
})
export class CookieDataService {
  jsonUrl = 'assets/cookies.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ICookies> {
    const list = this.http.get<ICookies>(this.jsonUrl);
    return list.pipe(tap((r) => console.log('TEST----->', r)));
  }
}
