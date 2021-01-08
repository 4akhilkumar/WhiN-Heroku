import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElloracavesComponent } from './elloracaves.component';

describe('ElloracavesComponent', () => {
  let component: ElloracavesComponent;
  let fixture: ComponentFixture<ElloracavesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElloracavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElloracavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
