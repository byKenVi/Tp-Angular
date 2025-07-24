import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStep4 } from './home-step-4';

describe('HomeStep4', () => {
  let component: HomeStep4;
  let fixture: ComponentFixture<HomeStep4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStep4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStep4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
