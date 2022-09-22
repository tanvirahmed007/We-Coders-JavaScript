
console.log('Hello API');

// API

// API is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service.

// API is a set of tools that can be used for building software applications.


// how to fetch data from API users

const url='https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(response => response.json())
.then(data => displayUsers(data));

const displayUsers = (users) => {
    const div = document.getElementById('userInfo');
    
    
    for(const user of users){

        const h1 = document.createElement('h1');
        h1.innerText = `Name: ${user.name}`;
        
        const p = document.createElement('p');
        p.innerText = `Email: ${user.email}`;

        div.appendChild(h1);
        div.appendChild(p);
   
}
};


// how to fetch data from API posts

const urlPost = 'https://jsonplaceholder.typicode.com/photos';

// fetch

fetch(urlPost)
.then(req => req.json())
.then(post => displayPost(post))

const displayPost = (posts) =>{

    // id call
    const postDiv = document.getElementById('postInfo');

    // loop
    for (const postData of posts){
        console.log(postData);
        const img = document.createElement('img');
        img.src = postData.url;
        

        postDiv.appendChild(img);
    }
}


