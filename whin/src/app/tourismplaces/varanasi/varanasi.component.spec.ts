import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VaranasiComponent } from './varanasi.component';

describe('VaranasiComponent', () => {
  let component: VaranasiComponent;
  let fixture: ComponentFixture<VaranasiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VaranasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaranasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
