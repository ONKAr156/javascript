class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor(value) {
        this.newNode = new Node(value)
        this.head = this.newNode
        this.tail = this.newNode
        this.length = 1
    }
    push(arg) {
        const newItem = new Node(arg)
        if (!this.head) {
            this.head = newItem
            this.tail = newItem
        } else {

            this.tail.next = newItem
            this.tail = newItem
        }
        this.length++
    }
    pop() {
        let temp = this.head
    }
    set(index, value) {
        if (index > 0 && index < this.length) {
            let postion = this.head
            console.log(index);
            for (let i = 0; i < index; i++) {
                postion = postion.next
            }
            postion.value = value
            console.log(value);

        }
    }
    remove(arg){

    }
}

const ll = new LinkList(5)
ll.push(10)
ll.push(20)
ll.push(80)
ll.set(1,100)
console.log(ll);