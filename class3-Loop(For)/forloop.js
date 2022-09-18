
console.log("We Coders presents: Intro to For Loop");


// array sorting
let arr1 = [20,10,15,60,30,70,50,40,80];

console.log("The Unsorted Array is: ",arr1);

console.log("The Sorted Array is: ",arr1.sort());


let name = ["Zahid","Badhon","Arnob","Tanvir","Mahadi"];
console.log("The Unsorted Array is: ",name);
console.log("The Sorted Array is: ",name.sort());


// for loop
let arr2 = [20,10,15,60,30,70,50,40,80];
console.log("The Array is: ",arr2);

for(let i=0 ; i<arr2.length ; i++){
    //output

    // i=0  -> i++ -> i=0+1=1
    // i=1  -> i++ -> i=1+1=2
    // i=2  -> i++ -> i=2+1=3
    // i=3  -> i++ -> i=3+1=4
    // i=4  -> i++ -> i=4+1=5
    // i=5  -> i++ -> i=5+1=6
    // i=6  -> i++ -> i=6+1=7
    // i=7  -> i++ -> i=7+1=8
    // i=8  -> i++ -> i=8+1=9
    console.log("The Array Element is: ",arr2[i]);


}

// for loop with if condition
let arr3 = [20,10,15,60,30,70,50,43,81];

for (let i=0; i<arr3.length; i++){
    if(arr3[i]%2==0){
        console.log("The Even Number is: ",arr3[i]);
    }else{
        console.log("The Odd Number is: ",arr3[i]);
    }

}

// find method in array
let arr4 = [20,10,15,60,30,70,50,43,81];

const findNumber = (num) => {
    return num>50;
}

const result = arr4.find(findNumber);
console.log("The Result is: ",result);


// object
let human = {
    name: "John",
    age: 30,
    married: true,
    address: "USA"
}

console.log("The Object is: ",human);