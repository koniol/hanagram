import { TestBed } from '@angular/core/testing';

import { GameBoardFacadeService } from './game-board-facade.service';

describe('GameBoardFacadeService', () => {
  let service: GameBoardFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameBoardFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
