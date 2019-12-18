const abcs = ["A", "B", "C"]

const shoutIterator = function* (word) {
    yield word + "!"
    yield word + "!!"
    yield word + "!!!"
}

const reverseIterator = function* (array) {
    yield* shoutIterator(array[0])
    yield* shoutIterator(array[1])
    yield* shoutIterator(array[2])
}

const iterator = reverseIterator(abcs)

for (let value of iterator) {
    console.log(value)
}




