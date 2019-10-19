const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;

	}

	push(data, priority) {
		let node = new Node();
		node.data = data;
		node.priority = priority;
		this.insertNode(node);
		this.shiftNodeUp(node);
	
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
