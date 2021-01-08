import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooktourComponent } from './booktour.component';

describe('BooktourComponent', () => {
  let component: BooktourComponent;
  let fixture: ComponentFixture<BooktourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
