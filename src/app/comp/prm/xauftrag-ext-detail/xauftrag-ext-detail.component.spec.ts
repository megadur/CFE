import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XauftragExtDetailComponent } from './xauftrag-ext-detail.component';

describe('XauftragExtDetailComponent', () => {
  let component: XauftragExtDetailComponent;
  let fixture: ComponentFixture<XauftragExtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XauftragExtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XauftragExtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
