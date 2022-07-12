import { TestBed } from '@angular/core/testing';
import { AppServicesService } from './app-services.service';

describe('AppServicesService', () => {
  let service: AppServicesService;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [AppServicesService] });
    service = TestBed.inject(AppServicesService);
  });
});
