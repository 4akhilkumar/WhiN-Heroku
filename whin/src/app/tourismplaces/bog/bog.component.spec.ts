import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BogComponent } from './bog.component';

describe('BogComponent', () => {
  let component: BogComponent;
  let fixture: ComponentFixture<BogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
