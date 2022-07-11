import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  constructor(private http: HttpClient) {}
  queryString = new BehaviorSubject<string>('');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getResults(
    query: string,
    itemsPerPage?: number,
    pageNo?: number
  ): Observable<SearchInterface> {
    let url = `https://api.github.com/search/users?q=${query} in:login&per_page=${itemsPerPage}`;
    if (pageNo) {
      url = url + `&page=${pageNo}`;
    }
    return this.http
      .get<SearchInterface>(url, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
