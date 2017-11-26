import { TestBed, inject } from '@angular/core/testing';

import { BrainSocketService } from './brain-socket.service';

describe('BrainSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrainSocketService]
    });
  });

  it('should be created', inject([BrainSocketService], (service: BrainSocketService) => {
    expect(service).toBeTruthy();
  }));
});
