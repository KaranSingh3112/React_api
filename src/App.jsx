import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    getUserData();
  }, [])

  //When we calling api we have to use fetch and for that we have to handle Promise.
  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url) //await :- bcoz it returns promise
    response = await response.json()
    setData(response.users)
  }

  return (
    <>
      <h1>Fetching data from api</h1>


      <ul className="user-data heading">
        <li><h4>First Name</h4></li>
        <li><h4>Last Name</h4></li>
        <li><h4>Age</h4></li>
      </ul>
      {
        data && data.map((item) => (  //&& means if data is not empty
          <div key={item.id}>
            <ul className="user-data">
              <li><h4>{item.firstName}</h4></li>
              <li><h4>{item.lastName}</h4></li>
              <li><h4>{item.age}</h4></li>
            </ul>
          </div>
        ))
      }
    </>
  )
}

export default App
