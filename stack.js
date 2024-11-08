class Stack {
    constructor(array = []) {
        this.array = array
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    insert(value) {
        this.array[this.array.length] = value
    }

    delete() {
        const last_value = this.array[this.array.length - 1]
        this.array.length = this.array.length - 1;
        
        return last_value;
    }

    access(n) {
        if (this.array.length <= n) return null;

        const temp_stack = new Stack(this.array)

        while(!temp_stack.isEmpty()) {
            const temp_last_index_number = temp_stack.array.length - 1
            
            if (temp_last_index_number == n) {
                return temp_stack.peek()
            }

            temp_stack.delete()
        }

        return null;
    }

    search(value) {
        const temp_stack = new Stack(this.array)

        while(!temp_stack.isEmpty()) {
            if (temp_stack.peek() == value) {
                return true
            }

            temp_stack.delete()
        }

        return false
    }

    isEmpty() {
        return this.array.length == 0
    }
}

const stack = new Stack([1, 2, 3, 4])
