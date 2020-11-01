import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooseBoardComponent } from './loose-board.component';

describe('LooseBoardComponent', () => {
  let component: LooseBoardComponent;
  let fixture: ComponentFixture<LooseBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooseBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LooseBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
