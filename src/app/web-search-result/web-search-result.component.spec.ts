import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { AppServicesService } from '../app-services.service';
import { WebSearchResultComponent } from './web-search-result.component';

describe('WebSearchResultComponent', () => {
  let component: WebSearchResultComponent;
  let fixture: ComponentFixture<WebSearchResultComponent>;
  let myService: AppServicesService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [WebSearchResultComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: AppServicesService, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(WebSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(AppServicesService);
  });

  describe('method1', () => {
    it('subscribe to subject', async () => {
      component.searchQuery = 'foo';
      expect(myService.queryString).toBeInstanceOf(BehaviorSubject);
      myService.queryString.next('foo');
      myService.queryString.subscribe((e) => {
        expect(e).toBe('foo');
      });
    });

    it('submit show work', async () => {
      expect(component.searchQuery).toEqual('foo');
      component.showResults();
      expect(component.searchResultItems).toBeTruthy();
    });
  });
});
