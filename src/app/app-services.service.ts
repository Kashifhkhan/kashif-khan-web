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

  searchQuery: string = '';

  getResults(
    query: string,
    itemsPerPage?: number,
    pageNo?: number
  ): Observable<SearchInterface> {
    this.searchQuery = query;
    let url = `https://api.github.com/search/users?q=${this.searchQuery} in:login`;
    if (pageNo) {
      url += `&per_page=${itemsPerPage}&page=${pageNo}`;
    }
    return this.http.get<SearchInterface>(url, this.httpOptions);
  }
}
