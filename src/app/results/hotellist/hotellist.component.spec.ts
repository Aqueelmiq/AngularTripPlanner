import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotellistComponent } from './hotellist.component';

describe('HotellistComponent', () => {
  let component: HotellistComponent;
  let fixture: ComponentFixture<HotellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
