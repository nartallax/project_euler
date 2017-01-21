module.exports = () => {
	var a = 0, b = 1;
	return Stream(() => {
		var x = a + b;
		a = b;
		b = x;
		return x;
	})
}