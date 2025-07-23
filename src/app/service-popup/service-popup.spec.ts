import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePopup } from './service-popup';

describe('ServicePopup', () => {
  let component: ServicePopup;
  let fixture: ComponentFixture<ServicePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
