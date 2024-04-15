import { TestBed } from '@angular/core/testing';

import { MaterialBoughtService } from './material-bought.service';

describe('MaterialBoughtService', () => {
  let service: MaterialBoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialBoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
