import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyattComponent } from './hyatt.component';

describe('HyattComponent', () => {
  let component: HyattComponent;
  let fixture: ComponentFixture<HyattComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
