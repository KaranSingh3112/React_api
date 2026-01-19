import { useEffect, useState } from "react";

export default function UserList() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, [])
  async function getData() {
    const url = "http://localhost:3000/user"
    let response = await fetch(url);
    response = await response.json()
    setData(response)

  }
  return (
    <div>
      
      <ul className="details heading">

              <li><h4>Name</h4></li>
              <li><h4>Age</h4></li>
              <li><h4>Email</h4></li>

            </ul>
      {
        data && data.map((item) => (
          <div key={item.id}>
            <ul className="details">

              <li><h4>{item.Name}</h4></li>
              <li><h4>{item.Age}</h4></li>
              <li><h4>{item.Email}</h4></li>

            </ul>
          </div>
        ))
      }
    </div>
  )
}