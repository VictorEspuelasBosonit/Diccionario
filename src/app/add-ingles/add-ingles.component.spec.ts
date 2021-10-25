import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInglesComponent } from './add-ingles.component';

describe('AddInglesComponent', () => {
  let component: AddInglesComponent;
  let fixture: ComponentFixture<AddInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
