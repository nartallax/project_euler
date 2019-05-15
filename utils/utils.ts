/** generate primes that are within [0, upperValueBound] */
export function* primes(upperValueBound: number){

	let known = new Set<number>();

	for(let i = 2; i < upperValueBound; i++){
		if(!known.has(i)){
			for(let j = 1; j < upperValueBound / i; j++){
				known.add(j * i);
			}
			yield i;
		}
	}

}

/** generate numbers from start to end, bounds included */
export function* sequentalIntegers(start: number, end: number){
	for(let i = start; i <= end; i++){
		yield i;
	}
}