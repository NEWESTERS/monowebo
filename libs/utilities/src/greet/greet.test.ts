import greet from './greet';

describe('greet', () => {
	it('should return hello message for given name', () => {
		expect(greet('NEWESTERS')).toEqual('Hello, NEWESTERS!');
	});
});
