import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplyComponent } from './viewapply.component';

describe('ViewapplyComponent', () => {
  let component: ViewapplyComponent;
  let fixture: ComponentFixture<ViewapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
