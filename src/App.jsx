import './App.css'
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
      <h1>Make Routes and pages for Add user and user list</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path='adduser' element={<UserAdd />} />
      </Routes>
    </div>
  )
}
export default App