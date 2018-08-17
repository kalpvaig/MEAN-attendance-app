import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceEmpComponent } from './view-attendance-emp.component';

describe('ViewAttendanceEmpComponent', () => {
  let component: ViewAttendanceEmpComponent;
  let fixture: ComponentFixture<ViewAttendanceEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendanceEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendanceEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
