
abstract class Component{
	protected input:string;
	protected output:string;
	protected determineOutput();
}

class Arrow extends Component{
	
	determineOutput(){
		output = input;
	}
}

class TransferFunction extends Component{

	private transFunction:string;

	determineOutput(){
		// output = input * transFunction
	}
}

class Operator extends Component{

	protected operation = OneInputOperation.NONE;

	determineOutput(){
		// Code here....
	}
}

class TwoInputOperator extends Operator{

	private input2:string;

	determineOutput(){
		// Code here....
	}
}

class OneInputOperator extends Operator{

	determineOutput(){
		// Code here....
	}
}