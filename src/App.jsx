import { useActionState } from "react"

export default function App(){

  function handleLogin(prevData,formData){
    let name = formData.get("name")
    let pass = formData.get("password")
    let regex = /^[A-Z0-9]+$/i
    
    if(!name || name.length>6){
      return { Error: "Name should not be blank and less than 6 character",name, pass}
    }else if(!regex.test(pass)){
      return { Error: "Password should only contain numbers and alphabet",name, pass}
    }else{
      return {message: 'Login Succesfully',name, pass}
    }
  }

  const [data,action,pending] = useActionState(handleLogin)
  

  return(
    <div>
      <h3>useAtion State</h3>
      {
        data?.message && <span style={{color:'green'}}>{data.message}</span>
      }
      {
        data?.Error && <span style={{color:"red"}}>{data.Error}</span>
      }
      <form action={action}>
        <input type="text" defaultValue={data?.name} name="name" placeholder="Enter name"/> <br /><br />
        <input type="text" defaultValue={data?.pass} name="password" placeholder="Enter Password"/> <br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}