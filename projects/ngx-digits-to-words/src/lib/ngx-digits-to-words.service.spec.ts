import { TestBed } from '@angular/core/testing';

import { NgxDigitsToWordsService } from './ngx-digits-to-words.service';

describe('NgxDigitsToWordsService', () => {
  let service: NgxDigitsToWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDigitsToWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
