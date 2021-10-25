import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentenglishComponent } from './contentenglish.component';

describe('ContentenglishComponent', () => {
  let component: ContentenglishComponent;
  let fixture: ComponentFixture<ContentenglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentenglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
