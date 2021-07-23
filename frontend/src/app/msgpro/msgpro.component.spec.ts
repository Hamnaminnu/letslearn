import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgproComponent } from './msgpro.component';

describe('MsgproComponent', () => {
  let component: MsgproComponent;
  let fixture: ComponentFixture<MsgproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
