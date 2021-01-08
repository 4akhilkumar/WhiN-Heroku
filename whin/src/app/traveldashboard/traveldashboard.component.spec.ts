import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TraveldashboardComponent } from './traveldashboard.component';

describe('TraveldashboardComponent', () => {
  let component: TraveldashboardComponent;
  let fixture: ComponentFixture<TraveldashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TraveldashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
