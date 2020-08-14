import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCreatorComponent } from './center-creator.component';

describe('CenterCreatorComponent', () => {
  let component: CenterCreatorComponent;
  let fixture: ComponentFixture<CenterCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
