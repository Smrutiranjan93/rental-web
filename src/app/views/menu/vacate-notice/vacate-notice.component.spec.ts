import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacateNoticeComponent } from './vacate-notice.component';

describe('VacateNoticeComponent', () => {
  let component: VacateNoticeComponent;
  let fixture: ComponentFixture<VacateNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacateNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacateNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
