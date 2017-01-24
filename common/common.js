// here just some common utils, that could be used in any type of program
Array.prototype.each = Array.prototype.forEach;
Array.prototype.stream = function(){
	var i = 0;
	return new Stream(() => i < this.length, () => this[i++]);
}

global.Stream = require('./stream.js');
global.TransactionalStream = require('./transactional_stream.js');
global.log = require('./log.js');
global.solution = v => {
	console.log(v);
	process.exit(0);
}

global.nums = (start, end, step) => {
	step = step || (start <= end? 1: -1);
	return new Stream(() => step > 0? start <= end: start >= end, () => ((start += step), start - step));
}