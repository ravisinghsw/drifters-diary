import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsAndEventsComponent } from './adds-and-events.component';

describe('AddsAndEventsComponent', () => {
  let component: AddsAndEventsComponent;
  let fixture: ComponentFixture<AddsAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
