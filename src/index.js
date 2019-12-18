let i = 0

const next = () => ({
    value: i++,
    done: i > 10
})

const iterator = {
    [Symbol.iterator]() {
        return {
            next
        }
    }
}

for (let value of iterator) {
    console.log(value)
}




