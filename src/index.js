const abcs = ["A", "B", "C"]

const numbers = [1, 2, 3]

const createReverseIterator = array => ({
    [Symbol.iterator]() {
        let i = array.length
        return {
            next: () => ({
                value: array[--i],
                done: i < 0
            })
        }
    }
})

const reverseIterator = function* (array) {
    let i = array.length
    while (i > 0) {
        yield array[--i]
    }
}


for (let value of reverseIterator(numbers)) {
    console.log(value)
}




