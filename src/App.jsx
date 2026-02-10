import { useReducer } from "react";

const emptyData = {
  name:'',
  password:'',
  email:'',
  city:'',
  address:'',
}
function getData(values,action){
  return {...values,[action.type]:action.val}

  
}

function App(){
  //dispatch :- use to get input field values
  const [data,dispatch] = useReducer(getData,emptyData);
   
  return(
    <div>
      <h3>useReducer hook</h3>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder="Enter name"/><br /> <br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="Enter Password"/><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"email"})} placeholder="Enter Email"/><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"city"})} placeholder="Enter City"/><br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder="Enter Address"/><br /><br />
      <button>Submit</button>
      <ul>
        <li>Name: {data.name}</li>
        <li>Password: {data.password}</li>
        <li>Email: {data.email}</li>
        <li>City: {data.city}</li>
        <li>Address: {data.address}</li>
      </ul>
    </div>
  )
}
export default App;