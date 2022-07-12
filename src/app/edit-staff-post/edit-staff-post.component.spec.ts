import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffPostComponent } from './edit-staff-post.component';

describe('EditStaffPostComponent', () => {
  let component: EditStaffPostComponent;
  let fixture: ComponentFixture<EditStaffPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStaffPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaffPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
