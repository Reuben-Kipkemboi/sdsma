import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPostComponent } from './staff-post.component';

describe('StaffPostComponent', () => {
  let component: StaffPostComponent;
  let fixture: ComponentFixture<StaffPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
