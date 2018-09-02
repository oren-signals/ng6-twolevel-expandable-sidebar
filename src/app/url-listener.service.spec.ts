import { TestBed, inject } from '@angular/core/testing';

import { UrlListenerService } from './url-listener.service';

describe('UrlListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlListenerService]
    });
  });

  it('should be created', inject([UrlListenerService], (service: UrlListenerService) => {
    expect(service).toBeTruthy();
  }));
});
