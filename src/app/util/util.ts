
interface BlockComponent{
	input:string;
	output:string;
	determineOutput();
}

enum OneInputOperation{NONE, GAIN}
enum TwoInputOperation{NONE, ADD, SUB}


export { BlockComponent, OneInputOperation, TwoInputOperation };