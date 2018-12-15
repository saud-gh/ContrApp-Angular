import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent extends BlockComponent implements OnInit {

  	constructor() {
  		super();
  	}
 	ngOnInit() {
  	}

}
