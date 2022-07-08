import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffprofileComponent } from './edit-staffprofile.component';

describe('EditStaffprofileComponent', () => {
  let component: EditStaffprofileComponent;
  let fixture: ComponentFixture<EditStaffprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStaffprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaffprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
