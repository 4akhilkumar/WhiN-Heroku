import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RedfortComponent } from './redfort.component';

describe('RedfortComponent', () => {
  let component: RedfortComponent;
  let fixture: ComponentFixture<RedfortComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedfortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
