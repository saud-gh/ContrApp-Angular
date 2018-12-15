import { Component, OnInit } from '@angular/core';
import { OperatorComponent } from '../operator/operator.component';

@Component({
  selector: 'app-one-input-operator',
  templateUrl: './one-input-operator.component.html',
  styleUrls: ['./one-input-operator.component.css']
})
export class OneInputOperatorComponent extends OperatorComponent implements OnInit {

  constructor() {
  	super();
  }

  ngOnInit() {
  }

}
