/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailBookService } from './detail-book.service';

describe('Service: DetailBook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailBookService]
    });
  });

  it('should ...', inject([DetailBookService], (service: DetailBookService) => {
    expect(service).toBeTruthy();
  }));
});
