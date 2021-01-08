import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KutchComponent } from './kutch.component';

describe('KutchComponent', () => {
  let component: KutchComponent;
  let fixture: ComponentFixture<KutchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
