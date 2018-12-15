import { Component, OnInit } from '@angular/core';
import { OperatorComponent } from '../operator/operator.component';

@Component({
  selector: 'app-two-input-operator',
  templateUrl: './two-input-operator.component.html',
  styleUrls: ['./two-input-operator.component.css']
})
export class TwoInputOperatorComponent extends OperatorComponent implements OnInit {

  constructor() {
  	super();
  }

  ngOnInit() {
  }

}
