function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

let add2 = makeAdder(2)

function* makeAdderGenerator(x) {
    let y = yield x
    while (true) {
        y = yield x + y
    }
}

let add2Iterator = makeAdderGenerator(2)
console.log(add2Iterator.next())
console.log(add2Iterator.next(1))
console.log(add2Iterator.next(2))