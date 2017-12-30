import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbestandComponent } from './xbestand.component';

describe('XbestandComponent', () => {
  let component: XbestandComponent;
  let fixture: ComponentFixture<XbestandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbestandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
