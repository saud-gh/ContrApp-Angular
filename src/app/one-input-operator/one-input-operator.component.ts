import { Component, OnInit } from '@angular/core';
import { OneInputOperation } from '../util/util';
import { BlockComponent } from '../util/util';

@Component({
  selector: 'app-one-input-operator',
  templateUrl: './one-input-operator.component.html',
  styleUrls: ['./one-input-operator.component.css']
})
export class OneInputOperatorComponent implements OnInit, BlockComponent {

	private operation = OneInputOperation.NONE;
	input = '';
	output = '';

	constructor() {
		
	}
	
	determineOutput(){}

	ngOnInit() {
	}

}
