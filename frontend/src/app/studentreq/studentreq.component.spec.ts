import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreqComponent } from './studentreq.component';

describe('StudentreqComponent', () => {
  let component: StudentreqComponent;
  let fixture: ComponentFixture<StudentreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
