import './include';
console.log('index.js')

const foo = { "test": "123" }
const foo2 = { ...foo, "test2": "456" }

console.log(foo, foo2)