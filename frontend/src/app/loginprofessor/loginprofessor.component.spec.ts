import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprofessorComponent } from './loginprofessor.component';

describe('LoginprofessorComponent', () => {
  let component: LoginprofessorComponent;
  let fixture: ComponentFixture<LoginprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
