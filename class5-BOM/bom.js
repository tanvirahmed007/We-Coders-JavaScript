console.log("Hello World");

document.getElementById("title").innerHTML = 
"Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";

alert("Hello World");
window.confirm("sometext");
if (confirm("Press a button!")) {
    
    document.getElementById("title").style.backgroundColor = "green";
  } else {
    document.getElementById("title").style.backgroundColor = "red";
  }



//   JSON Parse

const data = '{"name":"John", "age":30, "city":"New York"}';
console.log("Before Parse",data);
const obj = JSON.parse(data);
console.log("After Parse",obj);

// JSON Stringify

const data2 = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log("Before Stringify",data2);

const obj2 = JSON.stringify(data2);

console.log("After Stringify",obj2);
