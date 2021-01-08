import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BinsarComponent } from './binsar.component';

describe('BinsarComponent', () => {
  let component: BinsarComponent;
  let fixture: ComponentFixture<BinsarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BinsarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
