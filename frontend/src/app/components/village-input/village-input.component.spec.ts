import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageInputComponent } from './village-input.component';

describe('VillageInputComponent', () => {
  let component: VillageInputComponent;
  let fixture: ComponentFixture<VillageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
