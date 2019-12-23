const abcs = ["A", "B", "C"];

const createIterator = abcs[Symbol.iterator].bind(abcs);

const iterator = createIterator();

for (const i of iterator) {
  console.log(i);
  console.log("Sagar");
}
