import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppServicesService } from '../app-services.service';
import { WebSearchComponent } from './web-search.component';

describe('WebSearchComponent', () => {
  let component: WebSearchComponent;
  let fixture: ComponentFixture<WebSearchComponent>;
  let myService: AppServicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSearchComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: AppServicesService, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(WebSearchComponent);
    component = fixture.componentInstance;
    myService = TestBed.inject(AppServicesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should test function', async () => {
    it('should check input value', async () => {
      expect(component.searchText.value).toBe('');
    });

    it('should check searchAction', async () => {
      fixture.detectChanges();
      spyOn(component, 'searchAction');
      let el = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      expect(component.searchAction).toHaveBeenCalledTimes(1);
    });

    it('should call searchAction', () => {
      component.searchText.setValue('test');
      expect(component.searchText.value).toBeTruthy();
      component.searchAction();
    });

    it('should check searchQuery', () => {
      myService.queryString.subscribe((e: string) => {
        expect(e).toEqual('test');
      });
    });
  });
});
