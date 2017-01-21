// here, 2x = 2 * x; x2 = x ^ 2
// a2 + b2 = a2 + 2ab + b2 - 2ab = (a + b)2 - 2ab
// => a2 + b2 + c2 = (a + b)2 - 2ab + c2 = (a + b)2 + 2(a + b)c + c2 - 2(a + b)c - 2ab = (a + b + c)2 - 2(a + b)c - 2ab
// => a2 + b2 + ... + y2 + z2 = (a + b + ... + y + z)2 - 2ab - 2(a + b)c - ... - 2(a + b + ... + u + x)y - 2(a + b + ... + x + y)z
// so, to calculate difference between sum of squares and square of sums, we should compute the following:
// 2ab + 2(a + b)c + ... + 2(a + b + ... + u + x)y + 2(a + b + ... + x + y)z

var currentSum = 1,
	difference = 0,
	limit = 100;
	
nums(2, limit).each(i => {
	difference += 2 * currentSum * i;
	currentSum += i;
});

solution(difference);