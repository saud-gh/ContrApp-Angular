import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoInputOperatorComponent } from './two-input-operator.component';

describe('TwoInputOperatorComponent', () => {
  let component: TwoInputOperatorComponent;
  let fixture: ComponentFixture<TwoInputOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoInputOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoInputOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
