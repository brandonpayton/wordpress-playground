import { StepHandler } from '.';

export interface LogThisNumberStep {
	step: 'logThisNumber';
	number: number;
}

export const logThisNumber: StepHandler<LogThisNumberStep> = async (
	playground,
	{ number }
) => {
	console.log(`logThisNumber: ${await playground.returnThisNumber(number)}`);
};
