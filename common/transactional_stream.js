// transactional stream is a stream that can return to start after some values are readed (or just continue without storage)
var Stream = require('./stream.js');

var TransactionalStream = function(baseStream){
	this.storage = [];
	this.base = baseStream;
	this.pointer = 0;
	this.commited = false;
}

TransactionalStream.prototype = new Stream();

// implementing basic stream methods
TransactionalStream.prototype.hasNext = function(){
	return this.pointer < this.storage.length || this.base.hasNext();
}

TransactionalStream.prototype.next = function(){
	if(this.pointer < this.storage.length){
		return this.storage[this.pointer++];
	}
	
	var next = this.base.next();
	if(!this.commited){
		this.storage.push(next);
		this.pointer++;
	} else if(this.pointer){ // deleting old elements to prevent inneccessary memory pollution
		this.pointer = 0;
		this.storage = [];
	}
	
	return next;
}

// that's the most interesting parts
TransactionalStream.prototype.rollback = function(){
	this.commited = true;
	this.pointer = 0;
	return this;
}

TransactionalStream.prototype.commit = function(){
	this.commited = true;
	return this.base; // just continue from point we are finished at
}

Stream.prototype.transaction = function(){ return new TransactionalStream(this) }

module.exports = TransactionalStream;