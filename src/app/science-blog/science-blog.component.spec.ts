import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceBlogComponent } from './science-blog.component';

describe('ScienceBlogComponent', () => {
  let component: ScienceBlogComponent;
  let fixture: ComponentFixture<ScienceBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
