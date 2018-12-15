import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

	protected input:string;
	protected output:string;
	protected determineOutput();
	
  	constructor() { }

	ngOnInit() {
	}

}
