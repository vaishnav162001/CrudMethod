import Navbar from "./components/nabar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./components/Employee/AddEmp";
import EditEmp from "./components/Employee/EditEmp";
import ViewEmp from "./components/Employee/ViewEmp";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addemp" element={<AddEmp/>}/>
          <Route exact path="/editemp/:id" element={<EditEmp/>}/>
          <Route exact path="/viewemp/:id" element={<ViewEmp/>}/>
          
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
