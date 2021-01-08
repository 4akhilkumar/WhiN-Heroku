import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DonationdashboardComponent } from './donationdashboard.component';

describe('DonationdashboardComponent', () => {
  let component: DonationdashboardComponent;
  let fixture: ComponentFixture<DonationdashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
