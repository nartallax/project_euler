let limit = 999;

function paliNum3(x: number){
	return (x * 1000) + ((x % 10) * 100) + ((~~((x / 10) % 10)) * 10) + (~~((x / 100) % 10));
}

export function main(){

	for(let num = limit; num > 0; num--){
		let pali = paliNum3(num);

		for(let i = num + 1; i < limit; i++){
			if(pali % i === 0){
				console.log(pali + " = " + i + " * " + (pali / i));
				return;
			}
		}
	}

}