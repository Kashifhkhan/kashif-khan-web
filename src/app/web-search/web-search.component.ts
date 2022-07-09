import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.css'],
})
export class WebSearchComponent implements OnInit {
  constructor(private service: AppServicesService) {}

  searchQuery: string = '';

  ngOnInit() {}
}
