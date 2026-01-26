import './App.css'
import Updateuser from './Updateuser';
import UserAdd from './UserAdd'
import UserList from './UserList'
import { NavLink, Route, Routes } from "react-router";

function App() {
  
  return (
    <div>
      
      <ul className='Navlinks'>
        <li>
          <NavLink to="/">User list</NavLink>
        </li>
        <li>
          
          <NavLink to="adduser">Add User</NavLink>
        </li>
      </ul>
      <h3>Make Routes and pages for Add,delete,update user and display user list</h3>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path='adduser' element={<UserAdd />} />
        <Route path='/edit/:id' element={<Updateuser />} />
      </Routes>
    </div>
  )
}
export default App