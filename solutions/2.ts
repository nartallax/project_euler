let limit = 4000000;

export function main(){
	
	let result = 0;

	let a = 1, b = 2;
	while(b <= limit){
		if(b % 2 === 0)
			result += b;

		let x = a + b;
		a = b;
		b = x;
	}

	console.log(result);
}