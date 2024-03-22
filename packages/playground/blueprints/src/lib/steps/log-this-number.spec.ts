import { LogThisNumberStep, logThisNumber } from './log-this-number';
import { RecommendedPHPVersion } from '@wp-playground/wordpress';
import { NodePHP } from '@php-wasm/node';

describe('logThisNumber', () => {
	let php: NodePHP;
	beforeEach(async () => {
		php = await NodePHP.load(RecommendedPHPVersion);
	});

	const consoleMock = vi
		.spyOn(console, 'log')
		.mockImplementation(() => undefined);
	afterAll(async () => {
		consoleMock.mockRestore();
	});

	it('should log the number', async () => {
		const consoleMock = vi
			.spyOn(console, 'log')
			.mockImplementation(() => undefined);

		afterAll(() => {
			consoleMock.mockReset();
		});

		const step: LogThisNumberStep = {
			step: 'logThisNumber',
			number: 42,
		};
		await logThisNumber(php, step);
		expect(console.log).toHaveBeenCalledWith(
			`logThisNumber: ${step.number}`
		);
	});
});
