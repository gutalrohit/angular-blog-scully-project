import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentBlogComponent } from './entertainment-blog.component';

describe('EntertainmentBlogComponent', () => {
  let component: EntertainmentBlogComponent;
  let fixture: ComponentFixture<EntertainmentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
