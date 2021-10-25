import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspanolComponent } from './add-espanol.component';

describe('AddEspanolComponent', () => {
  let component: AddEspanolComponent;
  let fixture: ComponentFixture<AddEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
