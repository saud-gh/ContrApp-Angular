import { Component, OnInit } from '@angular/core';
import { TwoInputOperation } from '../util/util';
import { BlockComponent } from '../util/util';

@Component({
  selector: 'app-two-input-operator',
  templateUrl: './two-input-operator.component.html',
  styleUrls: ['./two-input-operator.component.css']
})
export class TwoInputOperatorComponent implements OnInit, BlockComponent {

	private operation = TwoInputOperation.NONE;
	input = '';
	input2 = '';
	output = '';

	constructor() {
		
	}
	
	determineOutput(){}

	ngOnInit() {
	}

}
