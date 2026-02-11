import { lazy, Suspense, useState } from "react";
const User = lazy(()=>import("./User"))

function App(){
  const [load,setLoad]=useState(false)
  return(
    <div>
      <h1>Lazy loading in React.</h1>
      {
        load?<Suspense fallback={<h3>Loading...</h3>}> <User /></Suspense>:null
      }
      <button onClick={()=>setLoad(true)}>Load username</button>
    </div>
  )
}
export default App;