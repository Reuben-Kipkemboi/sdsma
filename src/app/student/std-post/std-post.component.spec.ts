import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPostComponent } from './std-post.component';

describe('StdPostComponent', () => {
  let component: StdPostComponent;
  let fixture: ComponentFixture<StdPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
