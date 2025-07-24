import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePage } from './service-page';

describe('ServicePage', () => {
  let component: ServicePage;
  let fixture: ComponentFixture<ServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
