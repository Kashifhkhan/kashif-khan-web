import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  constructor(private http: HttpClient) {}

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
    return this.http.get<SearchInterface>(url, this.httpOptions);
  }
}
