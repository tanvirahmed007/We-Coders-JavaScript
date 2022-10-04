
console.log('Hello API');

// API

// API is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service.

// API is a set of tools that can be used for building software applications.


// how to fetch data from API users

// const url='https://jsonplaceholder.typicode.com/users';

// fetch(url)
// .then(response => response.json())
// .then(data => displayUsers(data));

// const displayUsers = (users) => {
//     const div = document.getElementById('userInfo');
    
    
//     for(const user of users){

//         const h1 = document.createElement('h1');
//         h1.innerText = `Name: ${user.name}`;
        
//         const p = document.createElement('p');
//         p.innerText = `Email: ${user.email}`;

//         div.appendChild(h1);
//         div.appendChild(p);
   
// }
// };


// how to fetch data from API posts

// const urlPost = 'https://jsonplaceholder.typicode.com/photos';

// // fetch

// fetch(urlPost)
// .then(req => req.json())
// .then(post => displayPost(post))

// const displayPost = (posts) =>{

//     // id call
//     const postDiv = document.getElementById('postInfo');

//     // loop
//     for (const postData of posts){
//         console.log(postData);
//         const img = document.createElement('img');
//         img.src = postData.url;
        

//         postDiv.appendChild(img);
//     }
// }



// how to fetch data from API comments

const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

// fetch
fetch(urlTodos)
// convert to json 
.then(res => res.json())
// display data
.then(todos => displayTodos(todos))


// display data
const displayTodos = (todos) => {
    const todosDiv = document.getElementById('todoList');

    for(const todo of todos){
        
        const h3 = document.createElement('h3');
        h3.innerText = `
        ID: ${todo.id}
         `;
         

         const p = document.createElement('p');
         p.innerText = `
         Title: ${todo.title}
         Completed: ${todo.completed}
         `;

        todosDiv.appendChild(h3);
        todosDiv.appendChild(p);
    }
};


// how to fetch data from API photos

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

// fetch
fetch(urlPhotos)
// convert to json
.then(res => res.json())
// display data
.then(photos => displayPhotos(photos))


// display data
const displayPhotos = (photos) => {
    const photosDiv = document.getElementById('photosInfo');

    for(const photo of photos){
        const img = document.createElement('img');
        img.src = photo.url;

        // append
        photosDiv.appendChild(img);
    }
};


