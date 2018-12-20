import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';
import * as math from '../../../node_modules/mathjs/dist/math.min.js';


@Component({
  selector: 'app-transfer-function',
  templateUrl: './transfer-function.component.html',
  styleUrls: ['./transfer-function.component.css']
})

export class TransferFunctionComponent implements BlockComponent, OnInit {

  input = '2*x+x^2';
  output = '';
  private transFunction:string = 'x+2';
  test:string = '';

  constructor() {
    this.output = this.input + '*' + this.transFunction;
    this.test = math.eval(this.output);
  }

  determineOutput(){
    // this.output = this.input + '*' + this.transFunction;
    // this.test = math.eval(this.output).toString();
  }

  ngOnInit() {
  }
}
