console.log("Hello World");


// Function

function sum(){
    return 1 + 1;
}

console.log(sum());


// Function with parameter

function mul(a,b){
    return a * b;
}
console.log(mul(4,5));


// calculation with function
// let sum, mul, div, sub;
function calc(a,b){
    sum = a + b;
    mul = a * b;
    sub = a - b;
    div = a / b;
}

calc(10,5);
console.log(sum);
console.log(mul);
console.log(sub);
console.log(div);


// arrow function

console.log("Arrow function");

const add = ( ) => {
    return 5 + 1;
}

console.log(add());

// arrow function with parameter

const multiply = (a,b) => {
    return a * b;
}

console.log(multiply(5,5));


// condition

let a = 10;
let b = 20;

if(a<b){
    console.log("b is greater than a");

}else{
    console.log("b is not greater than a");
}


let c = 11;

if(c%2 == 0){
    console.log("c is even number");
}else{
    console.log("c is odd number");
}


// condition with function

function evenOdd(a){
    if(a%2 == 0){
        console.log("a is even number");
    }else{
        console.log("a is odd number");
    }
}

console.log(evenOdd(11));


// array

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

console.log(arr[3]);


// task: apply condition in arrow function

