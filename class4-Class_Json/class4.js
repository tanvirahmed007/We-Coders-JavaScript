
console.log("Hello World");


// class

class Person {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    getAge(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let p1 = new Person("John", 1996);
console.log(p1.getAge());



// add new item in object

let obj = {
    name: "John",
    age: 25,
    city: "New York",
}

console.log(obj);

obj.country = "USA";

console.log(obj);

// add new values in array

let arr = [1,2,3,4,5];
console.log(arr);
arr.push(6);
arr.push("ndjb")
console.log(arr);


// pop method

let arr2 = [1,2,3,4,5];
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.pop(arr2[2]);
console.log(arr2);