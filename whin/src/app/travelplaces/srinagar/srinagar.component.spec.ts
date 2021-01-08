import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SrinagarComponent } from './srinagar.component';

describe('SrinagarComponent', () => {
  let component: SrinagarComponent;
  let fixture: ComponentFixture<SrinagarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SrinagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrinagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
