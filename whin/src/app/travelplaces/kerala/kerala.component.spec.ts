import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KeralaComponent } from './kerala.component';

describe('KeralaComponent', () => {
  let component: KeralaComponent;
  let fixture: ComponentFixture<KeralaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeralaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeralaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
