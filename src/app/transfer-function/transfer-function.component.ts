import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../util/util';
import * as math from '../../../node_modules/mathjs/dist/math.min.js';
//import * as mathjax from '../../../node_modules/mathjax/MathJax.js';


@Component({
  selector: 'app-transfer-function',
  templateUrl: './transfer-function.component.html',
  styleUrls: ['./transfer-function.component.css']
})

export class TransferFunctionComponent implements BlockComponent, OnInit {

  input = 'x^2';
  output = '';
  private transFunction:string = '(5x+6)';
  dispResult;
  simpResult;
  tex;
  jax;

  constructor() {
    this.output = this.input + '*' + this.transFunction;
    this.dispResult = math.parse(this.output);
    this.simpResult = math.simplify(this.dispResult);
    this.tex = this.dispResult.toTex(this.simpResult);
    //this.jax = mathjax.tex2jax(this.tex);
  }

  determineOutput(){}

  ngOnInit() {
  }
}
