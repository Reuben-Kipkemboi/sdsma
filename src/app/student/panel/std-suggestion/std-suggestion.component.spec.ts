import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSuggestionComponent } from './std-suggestion.component';

describe('StdSuggestionComponent', () => {
  let component: StdSuggestionComponent;
  let fixture: ComponentFixture<StdSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
