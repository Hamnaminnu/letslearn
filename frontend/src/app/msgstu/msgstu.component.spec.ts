import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgstuComponent } from './msgstu.component';

describe('MsgstuComponent', () => {
  let component: MsgstuComponent;
  let fixture: ComponentFixture<MsgstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgstuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
