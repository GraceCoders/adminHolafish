import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionWinnerComponent } from './auction-winner.component';

describe('AuctionWinnerComponent', () => {
  let component: AuctionWinnerComponent;
  let fixture: ComponentFixture<AuctionWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
