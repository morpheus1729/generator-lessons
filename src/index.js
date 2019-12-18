function* generator() {
    //first iteration
    yield 1

    //second iteration
    console.log("second")
    yield 2

    //third iteration
    console.log("third")
}

const iterator = generator()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())



