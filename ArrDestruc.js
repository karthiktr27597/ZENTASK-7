// Array destructring

// Basic variable assignment

const a = ['one', 'two', 'three']

const [ blue, green, red] = a

console.log(blue); //one
console.log(green); // two
console.log(red); // three

//Destructuring with more elements than the source

const b = ['one', 'two']

const [ blue1, green1, red1, orange] = b


console.log(blue1);  // one
console.log(green1); // two
console.log(red1);  // undefined
console.log(orange); // undefined


let c = 1;
let d = 3;

[c, d] = [d, c];
console.log(c); // 3
console.log(d); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]


// Parsing an array returned from a function

function f(){
    return [1, 2]
}

[e, f] = f()
console.log(e) // 1
console.log(f) // 2

// Ignoring some returned values

function f2(){
    return [1, 2, 3]
}

const [g, , h] = f2();

console.log(g); // 1
console.log(h); // 3

// Using a binding pattern as the rest property

const [i, k, ...{length}] = [1, 2, 3]
console.log(i,k, length) // 1,2,1

const [l, m, ...[n,o]] =[1,2,3,4]
console.log(l,m,n,o); // 1,2,3,4

// Using array destructuring on any iterable

const [p,q] = new Map([[1,2],[3,4]]);

console.log(p,q); // [ 1, 2 ] [ 3, 4 ]











