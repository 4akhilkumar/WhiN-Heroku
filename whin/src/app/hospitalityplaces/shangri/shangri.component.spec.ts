import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShangriComponent } from './shangri.component';

describe('ShangriComponent', () => {
  let component: ShangriComponent;
  let fixture: ComponentFixture<ShangriComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShangriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShangriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
