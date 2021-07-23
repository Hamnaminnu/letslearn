import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemessageComponent } from './typemessage.component';

describe('TypemessageComponent', () => {
  let component: TypemessageComponent;
  let fixture: ComponentFixture<TypemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
