import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorinterfaceComponent } from './professorinterface.component';

describe('ProfessorinterfaceComponent', () => {
  let component: ProfessorinterfaceComponent;
  let fixture: ComponentFixture<ProfessorinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
