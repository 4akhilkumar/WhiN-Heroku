import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospitalitydashboardComponent } from './hospitalitydashboard.component';

describe('HospitalitydashboardComponent', () => {
  let component: HospitalitydashboardComponent;
  let fixture: ComponentFixture<HospitalitydashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalitydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalitydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
