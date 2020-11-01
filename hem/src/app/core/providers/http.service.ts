import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(url: string, options?: { headers?: HttpHeaders }): Observable<any> {
    return this.http.get(url, options);
  }
}
