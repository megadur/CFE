import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XauftragDetailComponent } from './xauftrag-detail.component';

describe('XauftragDetailComponent', () => {
  let component: XauftragDetailComponent;
  let fixture: ComponentFixture<XauftragDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XauftragDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XauftragDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
