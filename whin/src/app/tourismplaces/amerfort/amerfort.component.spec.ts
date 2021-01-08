import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmerfortComponent } from './amerfort.component';

describe('AmerfortComponent', () => {
  let component: AmerfortComponent;
  let fixture: ComponentFixture<AmerfortComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmerfortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmerfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
