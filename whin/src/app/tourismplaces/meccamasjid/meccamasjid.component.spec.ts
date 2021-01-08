import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeccamasjidComponent } from './meccamasjid.component';

describe('MeccamasjidComponent', () => {
  let component: MeccamasjidComponent;
  let fixture: ComponentFixture<MeccamasjidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeccamasjidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeccamasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
