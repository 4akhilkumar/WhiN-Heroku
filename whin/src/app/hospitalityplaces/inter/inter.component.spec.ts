import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterComponent } from './inter.component';

describe('InterComponent', () => {
  let component: InterComponent;
  let fixture: ComponentFixture<InterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
