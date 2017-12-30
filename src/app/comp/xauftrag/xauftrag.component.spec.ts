import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XauftragComponent } from './xauftrag.component';

describe('XauftragComponent', () => {
  let component: XauftragComponent;
  let fixture: ComponentFixture<XauftragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XauftragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XauftragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
