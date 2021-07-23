import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinterfaceComponent } from './studentinterface.component';

describe('StudentinterfaceComponent', () => {
  let component: StudentinterfaceComponent;
  let fixture: ComponentFixture<StudentinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
