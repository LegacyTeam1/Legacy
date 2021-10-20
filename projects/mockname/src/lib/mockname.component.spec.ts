import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocknameComponent } from './mockname.component';

describe('MocknameComponent', () => {
  let component: MocknameComponent;
  let fixture: ComponentFixture<MocknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocknameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
