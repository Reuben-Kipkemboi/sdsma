import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContentFormComponent } from './staff-content-form.component';

describe('StaffContentFormComponent', () => {
  let component: StaffContentFormComponent;
  let fixture: ComponentFixture<StaffContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
