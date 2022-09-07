import userEvent from "@testing-library/user-event";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookNow from "./pages/BookNow";
import Navbar from "./pages/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact='true' path='/' element={<Home/>}/>
            <Route exact='true' path='/login' element={<Login/>}/>
            <Route exact='true' path='/booknow' element={<BookNow/>}/>
        </Routes>
      
      
      
      </BrowserRouter>
      
      {/* <Book/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
