import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XBestandComponent } from './xbestand.component';

describe('XBestandComponent', () => {
  let component: XBestandComponent;
  let fixture: ComponentFixture<XBestandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XBestandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XBestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
