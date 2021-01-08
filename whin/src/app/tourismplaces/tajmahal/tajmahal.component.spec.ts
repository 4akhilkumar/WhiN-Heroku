import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TajmahalComponent } from './tajmahal.component';

describe('TajmahalComponent', () => {
  let component: TajmahalComponent;
  let fixture: ComponentFixture<TajmahalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TajmahalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajmahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
