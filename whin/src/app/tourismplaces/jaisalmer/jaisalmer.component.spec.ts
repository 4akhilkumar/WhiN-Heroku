import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JaisalmerComponent } from './jaisalmer.component';

describe('JaisalmerComponent', () => {
  let component: JaisalmerComponent;
  let fixture: ComponentFixture<JaisalmerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JaisalmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaisalmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
