import { TestBed } from '@angular/core/testing';

import { MaterialSoldService } from './material-sold.service';

describe('MaterialSoldService', () => {
  let service: MaterialSoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialSoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
