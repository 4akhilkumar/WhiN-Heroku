import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AndamanComponent } from './andaman.component';

describe('AndamanComponent', () => {
  let component: AndamanComponent;
  let fixture: ComponentFixture<AndamanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
