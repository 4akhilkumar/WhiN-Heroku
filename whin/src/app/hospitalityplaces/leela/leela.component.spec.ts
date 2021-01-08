import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeelaComponent } from './leela.component';

describe('LeelaComponent', () => {
  let component: LeelaComponent;
  let fixture: ComponentFixture<LeelaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
