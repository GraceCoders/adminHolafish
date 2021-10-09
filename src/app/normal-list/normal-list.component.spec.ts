import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalListComponent } from './normal-list.component';

describe('NormalListComponent', () => {
  let component: NormalListComponent;
  let fixture: ComponentFixture<NormalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
