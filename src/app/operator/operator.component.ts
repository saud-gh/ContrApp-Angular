import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, BlockComponent {

  	input = '';
	output = '';
	
  	constructor() {
  		
  	}

  	determineOutput(){}

	ngOnInit() {
	}
}
