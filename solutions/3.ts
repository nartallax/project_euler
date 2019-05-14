import {primes} from "utils/utils";

let limit = 600851475143;

export function main(){

	let value = limit, max = 1;

	for(let prime of primes(Math.sqrt(limit) + 1)){
		if(value % prime === 0){
			max = prime;

			do{
				value /= prime;
			}while(value % prime === 0);
		}
		
	}

	console.log(max);

}