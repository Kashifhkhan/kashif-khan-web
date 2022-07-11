import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebSearchComponent } from './web-search/web-search.component';
import { WebSearchResultComponent } from './web-search-result/web-search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from './sort-pipe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WebSearchComponent,
    WebSearchResultComponent,
    SortPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
