import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';

@Component({
  selector: 'app-transfer-function',
  templateUrl: './transfer-function.component.html',
  styleUrls: ['./transfer-function.component.css']
})

export class TransferFunctionComponent implements BlockComponent, OnInit {

  input = '';
  output = '';
  private transFunction:string = '';

  constructor() {
  	
  }
  determineOutput(){}

  ngOnInit() {
  }
}
