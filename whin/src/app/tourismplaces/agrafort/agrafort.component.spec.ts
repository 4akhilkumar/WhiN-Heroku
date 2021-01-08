import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgrafortComponent } from './agrafort.component';

describe('AgrafortComponent', () => {
  let component: AgrafortComponent;
  let fixture: ComponentFixture<AgrafortComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrafortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrafortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
