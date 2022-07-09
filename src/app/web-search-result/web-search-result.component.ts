import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';
import { SearchInterface } from '../search-interface';

@Component({
  selector: 'app-web-search-result',
  templateUrl: './web-search-result.component.html',
  styleUrls: ['./web-search-result.component.css'],
})
export class WebSearchResultComponent implements OnInit {
  searchResultItems: any[];
  itemsPerPage: number = 9;
  pageNumber: number = 1;
  totalItems: number;

  constructor(private service: AppServicesService) {}

  ngOnInit() {
    this.showResults();
    this.totalItems = this.searchResultItems.length;
    console.log('page number init', this.pageNumber);
  }

  showResults(page?: any) {
    console.log(this.pageNumber, 'page number 2');
    console.log(page, 'page number 3');
    if (page) {
      this.service
        .getResults(this.service.searchQuery, this.itemsPerPage, page)
        .subscribe((result: SearchInterface) => {
          this.searchResultItems = result.items;
        });
    } else {
      this.service
        .getResults(this.service.searchQuery)
        .subscribe((result: SearchInterface) => {
          this.searchResultItems = result.items;
        });
    }
  }
}
