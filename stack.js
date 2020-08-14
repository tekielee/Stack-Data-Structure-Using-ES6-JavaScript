class BookStack {
	constructor(limit = 20) {
		this.limit = limit;
		this.stack = [];
	}
	
	pop() {
		if(this.stack === undefined || this.stack === null || this.stack.length === 0) {
			console.log('Stack is empty');
		} else {
			return this.stack.pop();
		}
	}
	
	push(newItem) {
		if(this.stack.length < this.limit) {
			this.stack.push(newItem);
		} else {
			console.log('Stack is full');
		}	
	}
	
	top() {
		return this.stack[this.stack.length - 1];
	}
	
	isEmpty() {
		if(this.stack === undefined || this.stack === null || this.stack.length === 0) {
			return true;
		} else {
			return false;
		}
	}
}

try {
	const bookStack = new BookStack(10);
	bookStack.push('Intro to programming');
	bookStack.push('Intro to JavaScript');
	bookStack.push('Intro to PHP');
	console.log(bookStack.pop());
	console.log(bookStack.top());
} catch(err) {
	console.log(err.message);
}