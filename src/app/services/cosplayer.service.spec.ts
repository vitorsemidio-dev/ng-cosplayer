import { TestBed } from '@angular/core/testing';

import { CosplayerService } from './cosplayer.service';

describe('CosplayerService', () => {
  let service: CosplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
