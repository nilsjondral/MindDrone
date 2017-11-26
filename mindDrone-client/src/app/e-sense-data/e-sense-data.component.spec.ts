import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESenseDataComponent } from './e-sense-data.component';

describe('ESenseDataComponent', () => {
  let component: ESenseDataComponent;
  let fixture: ComponentFixture<ESenseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESenseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESenseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
