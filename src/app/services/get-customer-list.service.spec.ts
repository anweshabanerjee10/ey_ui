import { TestBed } from '@angular/core/testing';

import { GetCustomerListService } from './get-customer-list.service';

describe('GetCustomerListService', () => {
  let service: GetCustomerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCustomerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
