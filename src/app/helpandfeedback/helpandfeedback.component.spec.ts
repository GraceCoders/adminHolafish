import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpandfeedbackComponent } from './helpandfeedback.component';

describe('HelpandfeedbackComponent', () => {
  let component: HelpandfeedbackComponent;
  let fixture: ComponentFixture<HelpandfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpandfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpandfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
