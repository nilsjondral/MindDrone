import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EegDataComponent } from './eeg-data.component';

describe('EegDataComponent', () => {
  let component: EegDataComponent;
  let fixture: ComponentFixture<EegDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EegDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EegDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
