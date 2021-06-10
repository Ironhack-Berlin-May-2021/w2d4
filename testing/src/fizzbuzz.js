function fizzBuzz(num, string = '') {
	if (num % 15 === 0) return 'fizzbuzz';
	if (num % 3 === 0) return 'fizz';
	if (num % 5 === 0) return 'buzz';
	return num;
	// if (num % 3 === 0) string += 'fizz';
	// if (num % 5 === 0) string += 'buzz';
	// return string || num;
}

if (typeof module !== undefined) {
	module.exports = fizzBuzz;
}