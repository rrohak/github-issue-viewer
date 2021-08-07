import { TestBed } from '@angular/core/testing';

import { IssueDataService } from './issue-data.service';

describe('IssueDataService', () => {
  let service: IssueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
