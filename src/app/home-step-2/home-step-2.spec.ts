import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStep2 } from './home-step-2';

describe('HomeStep2', () => {
  let component: HomeStep2;
  let fixture: ComponentFixture<HomeStep2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStep2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStep2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
