import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements BlockComponent, OnInit {

	input = '';
	output = '';
	
  	constructor() {
  		
  	}

  	determineOutput(){}
  	
 	ngOnInit() {
  	}

}
