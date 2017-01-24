var generateUnlimited = () => {
	var oldPrimes = [];
	
	var isPrime = x => !oldPrimes.stream().exists(p => (x % p) === 0)
	
	var i = 1;
	return Stream(() => {
		while(!isPrime(++i));
		oldPrimes.push(i);
		return i;
	})
}

var generateLimited = limit => {
	var filter = {};
	var mark = x => nums(x, limit, x).each(v => filter[v] = true);
	return nums(2, limit).filter(n => !(n in filter)).map(p => (mark(p), p));
}

module.exports = function(upperValueLimit){ return arguments.length > 0? generateLimited(upperValueLimit): generateUnlimited() }