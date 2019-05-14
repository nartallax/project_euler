import {primes} from "utils/utils";

let limit = 20;

/*
Каждое число может быть разбито на множество простых делителей
причем число, в множество простых делителей которого входит множество делителей другого числа, будет делимо нацело на это другое число
т.о. у нас есть некоторое число, которое должно быть делимо на множество чисел от 1 до limit
мы просто берем все множества простых чисел, которые являются делителями этих чисел, и "пересекаем"
таким образом, что в результирующем множестве каждый делитель встречается такое число раз,
которое является максимальным среди множеств делителей исходных чисел

после чтения решения:
я не использовал тот факт, что все простые числа, бОльшие sqrt(limit), не могут встречаться более одного раза
*/

export function main(){
	let primeList = [...primes(limit)];

	let mults = new Map<number, number>();

	for(let i = 2; i <= limit; i++){
		let mult = i;

		for(let prime of primeList){
			let primeCount = 0;
			while(mult % prime === 0){
				primeCount++;
				mult /= prime;
			}

			if(primeCount > 0 && (!mults.has(prime) || (mults.get(prime) as number) < primeCount)){
				mults.set(prime, primeCount);
			}
		}
	}

	let result = 1;
	for(let kv of mults){
		let [prime, count] = kv;
		for(let i = 0; i < count; i++){
			result *= prime;
		}
	}

	console.log(result + " = " + [...mults].map(kv => kv[0] + "^" + kv[1]).join(" * "));

}