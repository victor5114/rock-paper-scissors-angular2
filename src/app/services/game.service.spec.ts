/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';

describe('Service: GameService', () => {
  beforeEach(() => {
    addProviders([GameService]);
  });

  it('should ...',
    inject([GameService],
      (service: GameService) => {
        expect(service).toBeTruthy();
      }));
});
