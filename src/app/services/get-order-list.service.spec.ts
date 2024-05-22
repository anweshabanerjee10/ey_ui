import { TestBed } from '@angular/core/testing';

import { GetOrderListService } from './get-order-list.service';

describe('GetOrderListService', () => {
  let service: GetOrderListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrderListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
