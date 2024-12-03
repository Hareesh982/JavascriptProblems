
// swapping two variables using third variable

let a = 10
let b = 20
console.log(`Before swapping : a = ${a} , b = ${b}`);

let temp = a
a = b
b = temp
console.log(`After swapping : a = ${a} , b = ${b}`);

// swapping without using third variable

let x = 10
let y = 100

console.log(`Before swapping : x = ${x} , y = ${y}`);

x = x + y
y = x - y
x = x - y
console.log(`After swapping : x = ${x} , y = ${y}`);

// using simpler javascript assigning

let u = 50
let v = 150
console.log(`Before swapping : u = ${u} , v = ${v}`);

u,v = v,u

console.log(`After swapping : u = ${u} , v = ${v}`);



