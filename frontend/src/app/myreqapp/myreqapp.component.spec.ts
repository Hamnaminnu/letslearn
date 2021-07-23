import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreqappComponent } from './myreqapp.component';

describe('MyreqappComponent', () => {
  let component: MyreqappComponent;
  let fixture: ComponentFixture<MyreqappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreqappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreqappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
