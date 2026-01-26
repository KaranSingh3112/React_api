import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function Updateuser(){
    const {id} = useParams();
    const [Name,setName] = useState("");
    const [Age,setAge] = useState("");
    const [Email,setEmail] = useState("");
    const url = "http://localhost:3000/user/" + id;
    const navigate = useNavigate();

    useEffect(()=>{
        getUserData();
    },[])
    
    async function getUserData(){
        
        let response = await fetch(url)
        response = await response.json();
        console.log(response);
        setName(response.Name)
        setAge(response.Age)
        setEmail(response.Email)
    }

    async function updateUser(){
        let response = await fetch(url,{
            method:"put",
            body:JSON.stringify({Name,Age,Email})
        })
        response = await response.json()
        if(response){
            alert("User updated")
        }
        navigate('/');
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Update user details</h3>
            <input type="text" value={Name} onChange={(event)=>setName(event.target.value)} placeholder="Update name"/> <br /><br />
            <input type="text" value={Age} onChange={(event)=>setAge(event.target.value)} placeholder="Update age"/> <br /><br />
            <input type="text" value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder="Update email"/> <br /><br />
            <button onClick={updateUser}>Update</button>
        </div>
    )
}