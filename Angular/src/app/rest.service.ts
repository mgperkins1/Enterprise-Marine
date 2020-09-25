import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
// import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  registerUser(newUser: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/users', newUser).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(creds: any): Observable<string> {
    return this.http.post('http://localhost:5000/api/auth', creds, { observe: 'body', responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  getCurrentUser(token: string): Observable<any> {
    return this.http.get('http://localhost:5000/api/users/me', { headers: { 'x-auth-token': token } }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side error or network error occurred. Handle it accordingly
      console.log('An error occured: ', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unseccessful response code.
      // The response body may contain clues as to what went wrong
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.message;
      console.log(errMsg);
    }
    return throwError(errMsg);
  }
}