import userEvent from "@testing-library/user-event";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useEffect, useState, useContext} from "react";
import Navbar from "./pages/Navbar"
import Book from "./pages/Book";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(data => setUsers(data))
    console.log(setUsers)
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {users.map((user) =>(
        <Book name ={user.name} username ={user.username} email ={user.email}/>
      ))}
      {/* <Book/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
