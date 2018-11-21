import { TestBed } from '@angular/core/testing';

import { UserDataLocalstorageService } from './user-data-localstorage.service';

describe('UserDataLocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataLocalstorageService = TestBed.get(UserDataLocalstorageService);
    expect(service).toBeTruthy();
  });
});
