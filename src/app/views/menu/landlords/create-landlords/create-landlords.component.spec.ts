import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandlordsComponent } from './create-landlords.component';

describe('CreateLandlordsComponent', () => {
  let component: CreateLandlordsComponent;
  let fixture: ComponentFixture<CreateLandlordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLandlordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLandlordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
