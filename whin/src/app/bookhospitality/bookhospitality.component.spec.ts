import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookhospitalityComponent } from './bookhospitality.component';

describe('BookhospitalityComponent', () => {
  let component: BookhospitalityComponent;
  let fixture: ComponentFixture<BookhospitalityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookhospitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookhospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
