const createScoreFunction = require('./index');
const context = require('../testing/defaultContext');

test('Http trigger should return known text', async () => {
	const request = {
		query: { name: 'Bill' }
	};

	await createScoreFunction(context, request);

	expect(context.log.mock.calls.length).toBe(1);
	expect(context.res.body).toEqual('Hello Bill');
	
});