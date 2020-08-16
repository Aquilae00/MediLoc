import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPopUpComponent } from './run-pop-up.component';

describe('RunPopUpComponent', () => {
  let component: RunPopUpComponent;
  let fixture: ComponentFixture<RunPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
