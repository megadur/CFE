import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAccountComponent } from './xaccount.component';

describe('XAccountComponent', () => {
  let component: XAccountComponent;
  let fixture: ComponentFixture<XAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
