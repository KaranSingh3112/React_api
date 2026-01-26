import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserList() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/user";
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [])

  async function getData() {

    let response = await fetch(url);
    response = await response.json()
    setData(response)
  }

  //for deleting the user
  async function deleteUser(id) {
    console.log(id);
    let response = await fetch(url + '/' + id, {
      method: 'delete'
    })
    response = response.json()
    if (response) {
      alert("Data deleted succfully");
    }
    getData()

  }

  //For editing the user
  async function editUser(id){
    navigate('/edit/'+id);
  }

  return (
    <div>

      <ul className="details heading">

        <li><h4>Name</h4></li>
        <li><h4>Age</h4></li>
        <li><h4>Email</h4></li>
        <li><h4>Action</h4></li>

      </ul>
      {
        data && data.map((item) => (
          <div key={item.id}>
            <ul className="details">

              <li>{item.Name}</li>
              <li>{item.Age}</li>
              <li>{item.Email}</li>
              <li>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={()=>editUser(item.id)}>Edit</button>
                </li>

            </ul>
          </div>
        ))
      }
    </div>
  )
}