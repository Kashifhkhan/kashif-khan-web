import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';
import { SearchInterface } from '../search-interface';

@Component({
  selector: 'app-web-search-result',
  templateUrl: './web-search-result.component.html',
  styleUrls: ['./web-search-result.component.css'],
})
export class WebSearchResultComponent implements OnInit {
  searchQuery: string = '';
  searchResultItems: any[] = [];
  itemsPerPage: number = 9;
  pageNumber: number = 1;
  totalItems: number = 0;
  errorMessage: any = '';
  dataFetched: boolean = false;

  constructor(private service: AppServicesService) {}

  ngOnInit() {
    this.service.queryString.subscribe((e) => {
      if (e) {
        this.searchQuery = e;
        console.log(e);
        this.showResults();
      }
    });
  }

  showResults(page?: any) {
    if (page) {
      this.service
        .getResults(this.searchQuery, this.itemsPerPage, page)
        .subscribe(
          (result: SearchInterface) => {
            this.searchResultItems = result.items;
            this.dataFetched = true;
            this.errorMessage = '';
          },
          (err: any) => {
            this.errorMessage = err;
            this.searchResultItems = [];
          }
        );
    } else {
      this.service.getResults(this.searchQuery, this.itemsPerPage).subscribe(
        (result: SearchInterface) => {
          this.searchResultItems = result.items;
          this.totalItems = result.total_count;
          this.dataFetched = true;
          this.errorMessage = '';
        },
        (err: any) => {
          this.errorMessage = err;
          this.searchResultItems = [];
        }
      );
    }
  }
}
