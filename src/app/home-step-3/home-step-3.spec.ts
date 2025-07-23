import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStep3 } from './home-step-3';

describe('HomeStep3', () => {
  let component: HomeStep3;
  let fixture: ComponentFixture<HomeStep3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStep3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStep3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
