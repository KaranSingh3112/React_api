import { useState } from "react";
import "./App.css"

function App(){
  const [name,setName] = useState('');
  const [nameErr,setNameErr] = useState('');

  const [pass,setPass] = useState('');
  const [passErr,setPassErr] = useState('');

  function nameValidation(event){
    console.log(event.target.value);
    if(event.target.value.length > 6){
      setNameErr("Name should be only 6 or less that 6 letters");
    }else{
      setNameErr('')
    }  
  }

  function passValidation(event){
    let regex = /^[A-Z0-9]+$/i;
    if(regex.test(event.target.value)){
      setPassErr('');
    }else{
      setPassErr("Password should not contain special character(!@#...etc)");
    }
  }

  return(
    <div className="container">
      <div className="card">
      <h3>Checking Simple validation</h3>
      
        <input type="text" className={nameErr?'error':''} onChange={nameValidation} placeholder="Enter your name" />
        <span className="error-text">{ nameErr && nameErr}</span>
        
        <input type="text" className={passErr?'error':''} onChange={passValidation} placeholder="Enter your Password" /> 
        <span className="error-text">{passErr && passErr}</span>
        
        <button disabled={nameErr || passErr}>Login</button>
      
      </div>
    </div>
  )
}
export default App;