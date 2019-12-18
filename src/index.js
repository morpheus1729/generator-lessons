const abcs = ["A", "B", "C"]

const reverseIterator = function* (array) {
    yield* array
    yield* array.map(letter => letter.toLowerCase())
    yield Math.random()
}

const iterator = reverseIterator(abcs)

for (let value of iterator) {
    console.log(value)
}




