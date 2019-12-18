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


for (let value of createReverseIterator(numbers)) {
    console.log(value)
}




