import { TestBed } from '@angular/core/testing';

import { OperatorsService } from './operators.service';

describe('NgxQueryBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatorsService = TestBed.get(OperatorsService);
    expect(service).toBeTruthy();
  });
});
