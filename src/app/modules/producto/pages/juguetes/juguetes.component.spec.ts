import { ComponentFixture, TestBed } from '@angular/core/testing';

import { juguetesComponent } from './juguetes.component';

describe('MercamsiaComponent', () => {
  let component: juguetesComponent;
  let fixture: ComponentFixture<juguetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [juguetesComponent]
    });
    fixture = TestBed.createComponent(juguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
