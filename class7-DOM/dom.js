


const title = document.getElementById("title");
title.innerText = "Hi! From JS";


const red = () => {
    title.style.color = "red";
    
    title.style.fontSize = "50px";
}

const black = () => {
    title.style.color = "black";
    title.style.fontSize = "30px";
}


const validation = () => {
    const myName = document.forms["valid"]["name"].value;
    const myEmail = document.forms["valid"]["email"].value;
    const myPhone = document.forms["valid"]["phone"].value;

    if (myName == "" || myEmail == "" || myPhone == "") {
        alert("Please fill all the fields");
        return false;
    }
    else {
        alert("Thank you for your submission");
        return true;
    }
}