import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPostFormComponent } from './std-post-form.component';

describe('StdPostFormComponent', () => {
  let component: StdPostFormComponent;
  let fixture: ComponentFixture<StdPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdPostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
