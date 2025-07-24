import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStep1 } from './home-step-1';

describe('HomeStep1', () => {
  let component: HomeStep1;
  let fixture: ComponentFixture<HomeStep1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStep1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStep1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
