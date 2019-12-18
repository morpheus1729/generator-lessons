const abcs = ["A", "B", "C"]


const reverseIterator = function* (array) {    //here
    let message = yield 1
    let bye = yield message
    yield bye
}

const iterator = reverseIterator(abcs)

console.log(iterator.next())
console.log(iterator.next("hello"))
console.log(iterator.next("goodbye"))




