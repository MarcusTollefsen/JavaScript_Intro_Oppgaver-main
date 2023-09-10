const users = [
    
    {id: 0, name: "Trude", age: 23},
    {id: 1, name: "Simen", age: 55},
    {id: 2, name: "Lars", age: 74},
    {id: 3, name: "Ali", age: 32},
    {id: 4, name: "Finn", age: 90},
    {id: 5, name: "Kåre", age: 35},
    {id: 6, name: "Hanne", age: 9},
    {id: 7, name: "Åse", age: 43},
    {id: 8, name: "Anne", age: 6},
    {id: 9, name: "Amanda", age: 3},
    {id: 10, name: "Morgan", age: 87},
];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const userList = document.getElementById("users");

const createUsers = () => {
    users.map(user=>{
        const {name, age} = user;

        let li = document.createElement("li");
        li.innerHTML = `Navn: ${name} - Alder: ${age}`;
        userList.appendChild(li);

    })
} 

createUsers();


    const handleFilter = () =>{
        userList.innerHTML = "";
        let age = ageInput.value;
        let userByAge = users.filter(user=>user.age >= age);  
        userByAge.map(user=>{

            const {name, age} = user;
            let li = document.createElement("li");
            li.innerHTML = `Name: ${name} - Age:${age}`;
            userList.appendChild(li);
        });

       
    }

    const handleSearch = (e) => {
        userList.innerHTML = "";
        let getUser = users.filter(user =>user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    
        getUser.map(user =>{
            const {name, age} = user;
            let li = document.createElement("li");
            li.innerHTML = `Name: ${name} - Age:${age}`;
            userList.appendChild(li);
        });
    
    }

nameInput.addEventListener("keypress", handleSearch);
filterBtn.addEventListener("click", handleFilter);