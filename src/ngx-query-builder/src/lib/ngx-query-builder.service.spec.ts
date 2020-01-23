import { TestBed } from '@angular/core/testing';

import { NgxQueryBuilderService } from './ngx-query-builder.service';

describe('NgxQueryBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxQueryBuilderService = TestBed.get(NgxQueryBuilderService);
    expect(service).toBeTruthy();
  });
});
