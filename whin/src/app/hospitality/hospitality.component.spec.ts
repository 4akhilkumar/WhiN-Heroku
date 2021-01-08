import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospitalityComponent } from './hospitality.component';

describe('HospitalityComponent', () => {
  let component: HospitalityComponent;
  let fixture: ComponentFixture<HospitalityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
