function* generator() {
    //first iteration
    let message = yield 1

    //second iteration
    console.log(message)
    message = yield 2

    //third iteration
    console.log(message)
}

const iterator = generator()

console.log(iterator.next())
console.log(iterator.next("second"))
console.log(iterator.next("third"))



