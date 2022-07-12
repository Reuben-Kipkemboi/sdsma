import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdNavComponent } from './std-nav.component';

describe('StdNavComponent', () => {
  let component: StdNavComponent;
  let fixture: ComponentFixture<StdNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
