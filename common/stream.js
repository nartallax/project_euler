// lazy sequence
var Stream = function(hasNext, next){
	if(!(this instanceof Stream)) return new Stream(hasNext, next);
	
	if(typeof(hasNext) === 'function' && typeof(next) !== 'function'){
		next = hasNext;
		hasNext = () => true;
	}
	
	this.hasNext = hasNext;
	this.next = next;
}

Stream.prototype = {
	map: function(proc){ return new Stream(this.hasNext, () => proc(this.next())) },
	filter: function(proc){
		var next, nextIsLoaded = false;
		var loadNext = () => nextIsLoaded? true: this.hasNext()? ((next = this.next()), nextIsLoaded = true): false,
			takeNext = () => (loadNext(), (nextIsLoaded = false), next);
		
		return new Stream(() => {
			while(loadNext()) {
				if(proc(next)) return true;
				takeNext();
			}
			return false;
		}, () => takeNext())
	},
	
	each: function(proc, index){ index = index || 0; while(this.hasNext()) proc(this.next(), index++) },
	reduce: function(proc, value){ return this.each(x => value = proc(value, x)), value },
	array: function(arr){ return this.reduce((arr, x) => (arr.push(x), arr), arr || []) },
	
	zipWithIndex: function(i){ return (i = (i || 0)), new Stream(this.hasNext, () => [i += 1, this.next()]) },
	sum: function(){ return this.reduce((a, b) => a + b, 0) },
	product: function(){ return this.reduce((a, b) => a * b, 1) },
	max: function(){ return this.reduce((a, b) => a > b? a: b, 0) },
	min: function(){ return this.reduce((a, b) => a < b? a: b, 0) },
	
	add: function(otherStream){ 
		var next = () => this.next(),
			hasNext = () => this.hasNext()? true: ((next = () => otherStream.next()), (hasNext = () => otherStream.hasNext()))();
			
		return new Stream(() => hasNext(), () => next());
	},
	
	take: function(count){ 
		if(arguments.length < 1){
			return this.hasNext()? this.next(): undefined;
		} else {
			var i = 0;
			return new Stream(() => i < count, () => (i++, this.next()));
		}
	},
	takeWhile: function(cond){
		var next, nextIsLoaded = false;
		var loadNext = () => nextIsLoaded? true: this.hasNext()? ((next = this.next()), nextIsLoaded = true): false,
			takeNext = () => (loadNext(), (nextIsLoaded = false), next);
		
		return new Stream(() => loadNext() && cond(next), () => takeNext())
	},
	drop: function(count){
		while(count-->0 && this.hasNext()) this.next();
		return this;
	},
	
	exists: function(cond){
		while(this.hasNext()) if(cond(this.next())) return true;
		return false;
	},
	
	tail: function(len){
		if(arguments.length < 1){
			var res = undefined;
			this.each(x => res = x);
			return res;
		} else {
			var res = [];
			this.each(x => {
				res = res.length >= len? res.slice(1, len): res;
				res.push(x);
			});
			return res;
		}
	},
	
	find: function(proc){ return this.filter(proc).take() }
}

module.exports = Stream;