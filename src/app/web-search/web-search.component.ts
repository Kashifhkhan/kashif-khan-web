import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.css'],
})
export class WebSearchComponent implements OnInit {
  constructor(private service: AppServicesService) {}
  searchText = new FormControl('');

  searchAction() {
    if (this.searchText.value) {
      this.service.queryString.next(this.searchText.value);
    }
  }

  ngOnInit() {}
}
