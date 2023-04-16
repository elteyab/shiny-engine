import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayMenuComponent } from './all-day-menu.component';

describe('AllDayMenuComponent', () => {
  let component: AllDayMenuComponent;
  let fixture: ComponentFixture<AllDayMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDayMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
