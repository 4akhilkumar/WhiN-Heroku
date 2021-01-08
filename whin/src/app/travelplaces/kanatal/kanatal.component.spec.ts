import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KanatalComponent } from './kanatal.component';

describe('KanatalComponent', () => {
  let component: KanatalComponent;
  let fixture: ComponentFixture<KanatalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KanatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
