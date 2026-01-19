import { useState } from "react"

export default function UserAdd(){
    const [Name,setName] = useState("");
    const [Age,setAge] = useState("");
    const [Email,setEmail] = useState("");
    async function addUser(){
        const url = "http://localhost:3000/user" 
        // For post(adding) method
        let response = await fetch(url,{ 
            method:'Post',
            body:JSON.stringify({Name,Email,Age})
        });
        response = await response.json();
        if(response){
            alert('User added succefully!!!');
        }
    }
    return(
        <div>
            <h2>Add new user</h2>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter your Name"/>
            <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter your Age"/>
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your Email id"/>
            <button onClick={addUser}>Add user</button>
        </div>
    )
}