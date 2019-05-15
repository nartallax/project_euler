import {primes} from "utils/utils";

export function main(){
	let result = 0;
	for(let prime of primes(2000000)){
		result += prime;
	}
	console.log(result);
}