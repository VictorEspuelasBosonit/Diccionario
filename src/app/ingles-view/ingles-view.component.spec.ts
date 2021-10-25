import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesViewComponent } from './ingles-view.component';

describe('InglesViewComponent', () => {
  let component: InglesViewComponent;
  let fixture: ComponentFixture<InglesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
