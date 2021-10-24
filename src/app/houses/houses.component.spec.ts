import { ComponentFixture, TestBed } from 'projects/mockname/src/node_modules/@angular/core/testing';

import { HousesComponent } from './houses.component';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
