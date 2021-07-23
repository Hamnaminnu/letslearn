import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessordashComponent } from './professordash.component';

describe('ProfessordashComponent', () => {
  let component: ProfessordashComponent;
  let fixture: ComponentFixture<ProfessordashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessordashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
