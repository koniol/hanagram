import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinBoardComponent } from './win-board.component';

describe('WinBoardComponent', () => {
  let component: WinBoardComponent;
  let fixture: ComponentFixture<WinBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
