import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInputOperatorComponent } from './one-input-operator.component';

describe('OneInputOperatorComponent', () => {
  let component: OneInputOperatorComponent;
  let fixture: ComponentFixture<OneInputOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneInputOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneInputOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
