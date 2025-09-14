class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
    }
}

class BrowserHistory {
    constructor() {
        this.head = null;
        this.current = null;
    }

    visit(url) {
        let newNode = new Node(url);
        if (this.head === null) {
            this.head = newNode;
            this.current = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
            this.current = newNode;
        }
        console.log(this.current.url);
    }

    back() {
        if (this.current === this.head) {
            console.log(this.current.url);
            return;
        }

        let temp = this.head;
        let prev = null;

        while (temp !== this.current) {
            prev = temp;
            temp = temp.next;
        }

        this.current = prev;
        console.log(this.current.url);
    }

    forward() {
        if (this.current !== null && this.current.next !== null) {
            this.current = this.current.next;
        }
        console.log(this.current.url);
    }

    showCurrent() {
        if (this.current !== null) {
            console.log(this.current.url);
        } else {
            console.log("No page available");
        }
    }
}

let history = new BrowserHistory();

history.visit("google.com");
history.visit("github.com");
history.visit("linkedin.com");
history.back();
history.forward();
history.visit("stackoverflow.com");
history.showCurrent();