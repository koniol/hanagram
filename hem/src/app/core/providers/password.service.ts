import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

export interface Passwords {
  passwords: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private passwords: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private http: HttpService,
  ) { }

  public loadsPasswords(): Observable<void> {
    return this.http.get('assets/answers.json')
      .pipe(
        map(({ passwords})  => this.passwords.next(passwords ?? []),
        catchError(err => {
          this.passwords.next([]);
          return throwError('Cant load passwords');
        }))
      );
  }

  public getPasswords(): string[] {
    return this.passwords.getValue();
  }
}
