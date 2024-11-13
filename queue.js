class Queue {
  constructor(array = []) {
    this.array = array
  }

  peek() {
    return this.array[0]
  }

  enqueue(value) {
    this.array[this.array.length] = value
  }

  dequeue() {
    const value = this.peek()

    for (let i = 1; i < this.array.length; i++) {
      this.array[i - 1] = this.array[i]
    }

    this.array.length = this.array.length - 1;

    return value;
  }

  access(n) {
    const temp_queue = new Queue(this.array)

    for (let i = 0; i <= n; i++) {
      if (temp_queue.isEmpty()) {
        return null;
      }

      temp_queue.dequeue()
    }

    return temp_queue.peek()
  }

  search(value) {
    const temp_queue = new Queue(this.array)

    while (temp_queue.peek() != value) {
      if (temp_queue.isEmpty()) {
        return false;
      }

      temp_queue.dequeue()
    }

    return true;
  }

  isEmpty() {
    return this.array.length == 0;
  }
}

const queue = new Queue([1, 2, 3, 4])
