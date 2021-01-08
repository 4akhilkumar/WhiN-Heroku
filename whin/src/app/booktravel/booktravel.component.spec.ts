import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooktravelComponent } from './booktravel.component';

describe('BooktravelComponent', () => {
  let component: BooktravelComponent;
  let fixture: ComponentFixture<BooktravelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
