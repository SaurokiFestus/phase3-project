import userEvent from "@testing-library/user-event";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useEffect, useState, useContext} from "react";

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
      {users.map((user) =>(
        <Home name ={user.name} username ={user.username} email ={user.email}/>
      ))}
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
