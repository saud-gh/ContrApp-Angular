import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFunctionComponent } from './transfer-function.component';

describe('TransferFunctionComponent', () => {
  let component: TransferFunctionComponent;
  let fixture: ComponentFixture<TransferFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
