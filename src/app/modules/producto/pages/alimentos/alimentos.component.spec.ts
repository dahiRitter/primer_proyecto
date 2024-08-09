import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alimentosComponent } from './alimentos.component';

describe('Component', () => {
  let component: alimentosComponent;
  let fixture: ComponentFixture<alimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alimentosComponent]
    });
    fixture = TestBed.createComponent(alimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
