var x = 600851475143;

solution(algo.primes().takeWhile(p => {
	if(x <= 1) return false;
	while((x % p) === 0) x /= p;
	return true;
}).tail());