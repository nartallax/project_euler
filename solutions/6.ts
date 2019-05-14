/*
(a + b)^2 = (a + b)(a + b) = a^2 + 2ab + b^2
(a + b + c)^2 = (a + b + c)(a + b + c) = aa + ab + ac + ab + bb + bc + ac + bc + cc = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
(a + b + c + d)^2 = aa + ab + ac + ad + ab + bb + bc + bd + ac + bc + cc + cd + ad + bd + cd + dd = a^2 + b^2 + c^2 + d^2 + 2ab + 2ac + 2ad + 2bc + 2bd + 2cd
(a + ... + z)^2 = (a^2 + ... + z^2) + 2*( a * (b + ... + z) + b * (c + ... + z) + ... + x * (y + z) + y * (z) )

answer: 2*( a * (b + ... + z) + b * (c + ... + z) + ... + x * (y + z) + y * (z) )
*/

const limit = 100;

export function main(){
	let mult = 0;
	let result = 0;

	for(let i = limit; i >= 1; i--){
		result += mult * i;
		mult += i;
	}

	result *= 2;
	console.log(result);
}