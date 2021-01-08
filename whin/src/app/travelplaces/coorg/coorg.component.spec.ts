import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoorgComponent } from './coorg.component';

describe('CoorgComponent', () => {
  let component: CoorgComponent;
  let fixture: ComponentFixture<CoorgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
