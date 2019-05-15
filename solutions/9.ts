/*
a + b + c = 1000
aa + bb = cc

c = 1000 - a - b
aa + bb = (1000 - a - b)^2 = 1000000 - 1000a - 1000b - 1000a + aa + ab - 1000b + ab + bb = 1000000 - 2000a - 2000b + 2ab + aa + bb
0 = 1000000 - 2000a - 2000b + 2ab
0 = (2b - 2000)a - 2000b + 1000000
a = (2000b - 1000000) / (2b - 2000)

revert (because it's assumed a < b < c):
b = (2000a - 1000000) / (2a - 2000)
*/

let limit = 1000;

export function main(){

	let lim2 = limit * limit, twoLim = limit * 2; // optimizations

	for(let a = 1; a < Math.ceil(limit / 3); a++){
		let b = (twoLim * a - lim2) / (2 * a - twoLim);
		if(~~b === b){
			let c = limit - a - b;
			console.log(`a * b * c = ${a} * ${b} * ${c} = ${a * b * c}`)
			return;
		}
	}

}