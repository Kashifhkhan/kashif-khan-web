import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebSearchComponent } from './web-search/web-search.component';
import { WebSearchResultComponent } from './web-search-result/web-search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WebSearchComponent,
    WebSearchResultComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
