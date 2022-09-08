import userEvent from "@testing-library/user-event";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
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
            <Route exact='true' path='/locations' element={<Locations/>}/>
            <Route exact='true' path='/booknow' element={<BookNow/>}/>
        </Routes>
      
      
      
      </BrowserRouter>
      
      {/* <Book/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
