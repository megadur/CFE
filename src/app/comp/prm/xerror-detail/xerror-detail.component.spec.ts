import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XerrorDetailComponent } from './xerror-detail.component';

describe('XerrorDetailComponent', () => {
  let component: XerrorDetailComponent;
  let fixture: ComponentFixture<XerrorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XerrorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XerrorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
