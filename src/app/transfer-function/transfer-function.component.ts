import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';
import * as math from '../../../node_modules/mathjs/dist/math.min.js';


@Component({
  selector: 'app-transfer-function',
  templateUrl: './transfer-function.component.html',
  styleUrls: ['./transfer-function.component.css']
})

export class TransferFunctionComponent implements BlockComponent, OnInit {

  input = 't^2';
  output = '';
  private transFunction:string = '(5t+6)';
  private tex;
  private parsedOutput;

  constructor() {
    this.output = this.input + '*' + this.transFunction;
    this.parsedOutput = math.parse(this.output);
    this.tex = this.parsedOutput.toTex();
  }

  determineOutput(){
    
  }

  ngOnInit() {
  }
}
