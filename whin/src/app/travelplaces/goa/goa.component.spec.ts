import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoaComponent } from './goa.component';

describe('GoaComponent', () => {
  let component: GoaComponent;
  let fixture: ComponentFixture<GoaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
