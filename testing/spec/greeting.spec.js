// this imports the greeting function 
const greeting = require('../src/greeting');

// test suite
describe('The function greeting', function () {
    it('should be a function', function () {
        expect(typeof greeting).toBe('function');
    });
    // spec - specification 
    it('should greet all ironhackers', function () {
        // expectation - using a matcher
        expect(greeting()).toEqual('hello ironhackers!');
    })
});
