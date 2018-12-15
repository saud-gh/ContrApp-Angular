

export interface BlockComponent{
	input:string;
	output:string;
	determineOutput();
}

export enum OneInputOperation{NONE, GAIN}
export enum TwoInputOperation{NONE, ADD, SUB}
