import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XauftragHisDetailComponent } from './xauftrag-his-detail.component';

describe('XauftragHisDetailComponent', () => {
  let component: XauftragHisDetailComponent;
  let fixture: ComponentFixture<XauftragHisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XauftragHisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XauftragHisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
