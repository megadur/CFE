import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmessageDetailComponent } from './xmessage-detail.component';

describe('XmessageDetailComponent', () => {
  let component: XmessageDetailComponent;
  let fixture: ComponentFixture<XmessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
