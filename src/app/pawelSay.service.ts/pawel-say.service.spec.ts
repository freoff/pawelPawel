import { TestBed } from '@angular/core/testing';

import { PawelSayService } from './pawel-say.service';

describe('PawelSayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PawelSayService = TestBed.get(PawelSayService);
    expect(service).toBeTruthy();
  });
});
