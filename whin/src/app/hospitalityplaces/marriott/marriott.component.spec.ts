import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarriottComponent } from './marriott.component';

describe('MarriottComponent', () => {
  let component: MarriottComponent;
  let fixture: ComponentFixture<MarriottComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriottComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
