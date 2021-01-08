import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OberoiComponent } from './oberoi.component';

describe('OberoiComponent', () => {
  let component: OberoiComponent;
  let fixture: ComponentFixture<OberoiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OberoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OberoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
