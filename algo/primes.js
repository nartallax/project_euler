module.exports = () => {
	var oldPrimes = [];
	
	var isPrime = x => !oldPrimes.stream().exists(p => (x % p) === 0)
	
	var i = 1;
	return Stream(() => {
		while(!isPrime(++i));

		oldPrimes.push(i);
		return i;
	})
}