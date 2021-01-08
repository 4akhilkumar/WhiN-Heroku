import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoiComponent } from './goi.component';

describe('GoiComponent', () => {
  let component: GoiComponent;
  let fixture: ComponentFixture<GoiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
