function* primes(){
	let knowns = [] as number[], x = 2;
	while(true){
		let good = true;
		for(let i = 0; i < knowns.length && knowns[i] * knowns[i] <= x; i++){
			if(x % knowns[i] === 0){
				good = false;
				break;
			}
		}
		if(good){
			knowns.push(x);
			yield x;
		}
		x++;
	}
}

let limit = 10001;

export function main(){
	let i = 0;
	for(let prime of primes()){
		if(++i === limit){
			console.log(prime);
			return;
		}
	}
}