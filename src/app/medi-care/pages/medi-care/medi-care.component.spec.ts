import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediCareComponent } from './medi-care.component';

describe('MediCareComponent', () => {
  let component: MediCareComponent;
  let fixture: ComponentFixture<MediCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediCareComponent]
    });
    fixture = TestBed.createComponent(MediCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
