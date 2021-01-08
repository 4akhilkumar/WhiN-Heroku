import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeriyarComponent } from './periyar.component';

describe('PeriyarComponent', () => {
  let component: PeriyarComponent;
  let fixture: ComponentFixture<PeriyarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriyarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriyarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
