var revertDigits = x => {
		var result = 0;
		while(x){
			result = (result * 10) + (x % 10);
			x = Math.floor(x / 10);
		}
		return result;
	};
	
var i = 1000;
var palindromes = Stream(() => (--i, (i * 1000) + revertDigits(i)))
var divisorsRange = num => ((num / 999) >= 1000? [].stream(): nums(999, Math.ceil(num / 1000)));
solution(palindromes.find(x => divisorsRange(x).exists(d => (x % d) === 0)));