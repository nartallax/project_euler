// simple and non-customizeable stderr logger

var twoDigits = n => n > 9? n + '': '0' + n,
		threeDigits = n => n > 99? n + '': n > 9? '0' + n: '00' + n;

var timeString = d => {
	d = d || new Date();
	return d.getFullYear() + '.' + 
		twoDigits(d.getMonth() + 1) + '.' + 
		twoDigits(d.getDate()) + ' ' + 
		twoDigits(d.getHours()) + ':' + 
		twoDigits(d.getMinutes()) + ':' + 
		twoDigits(d.getSeconds()) + ':' + 
		threeDigits(d.getMilliseconds());
};

var stringOf = v => {
	switch(typeof(v)){
		case 'undefined': return 'undefined';
		case 'string': return v;
		case 'boolean': return v? 'true': 'false';
		case 'object': 
			if(v === null) return 'null';
			if(typeof(v.toString) === 'function' && v.toString !== Object.prototype.toString && v.toString !== Array.prototype.toString){
				return v.toString;
			}
			try {
				return JSON.stringify(v);
			} catch(e){ // recursive JSON
				return v + '';
			}
		case 'number':
		case 'function':
		default: // WTF?
			return v + '';
	}
}

module.exports = function(){
	var args = [timeString(), ' | '];
	for(var i = 0; i < arguments.length; i++) args.push(stringOf(arguments[i]));
	console.error(args.join(''));
}