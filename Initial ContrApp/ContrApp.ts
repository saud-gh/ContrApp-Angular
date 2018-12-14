
abstract class Component{
	input:string;
	output:string;
	determineOutput();
}

class Arrow extends Component{
	
	determineOutput(){
		output = input;
	}
}

class TransferFunction extends Component{

	transFunction:string = '';

	determineOutput(){
		// output = input * transFunction
	}
}

enum OneInputOperation{NONE, GAIN}
enum TwoInputOperation{NONE, ADD, SUB}

class Operator extends Component{

	operation = OneInputOperation.NONE;

	determineOutput(){
		// Code here....
	}
}

class TwoInputOperator extends Operator{

	input2:string;

	determineOutput(){
		// Code here....
	}
}

class OneInputOperator extends Operator{

	determineOutput(){
		// Code here....
	}
}