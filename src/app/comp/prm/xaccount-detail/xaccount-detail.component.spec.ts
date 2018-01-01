import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAccountDetailComponent } from './xaccount-detail.component';

describe('XAccountDetailComponent', () => {
  let component: XAccountDetailComponent;
  let fixture: ComponentFixture<XAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
