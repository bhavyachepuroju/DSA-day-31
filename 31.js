class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;

    }


    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteByValue(value) {
        if (this.head === null) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    deleteAtPosition(position) {
        if (this.head === null || position <= 0) return;

        if (position === 1) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 1;

        while (current !== null && count < position) {
            prev = current;
            current = current.next;
            count++;
        }

        if (current !== null) {
            prev.next = current.next;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}
let list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);

console.log("After insertions:");
list.printList();

list.deleteByValue(20);
console.log("After deleting value 20:");
list.printList();

list.deleteAtPosition(2);
console.log("After deleting node at position 2:");
list.printList();