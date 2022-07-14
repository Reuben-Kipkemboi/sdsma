import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCommentComponent } from './std-comment.component';

describe('StdCommentComponent', () => {
  let component: StdCommentComponent;
  let fixture: ComponentFixture<StdCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
