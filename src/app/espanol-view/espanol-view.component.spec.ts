import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolViewComponent } from './espanol-view.component';

describe('EspanolViewComponent', () => {
  let component: EspanolViewComponent;
  let fixture: ComponentFixture<EspanolViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanolViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanolViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
