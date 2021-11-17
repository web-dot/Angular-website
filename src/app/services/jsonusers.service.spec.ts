import { TestBed } from '@angular/core/testing';

import { JsonusersService } from './jsonusers.service';

describe('JsonusersService', () => {
  let service: JsonusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
