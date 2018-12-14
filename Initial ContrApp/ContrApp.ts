
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
