import './App.css';
import Navbar from './Pagess/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pagess/Home/Home/Home';
import About from './Pagess/About/About';
import Blog from './Pagess/Blog/Blog';
import Login from './Pagess/Login/Login';
import Footer from './Pagess/Shared/Footer/Footer';
 import TsPartical from './Pagess/Shared/TsPartical';
import ManageItem from './Pagess/Home/ManageItem/ManageItem';
import AddItem from './Pagess/Home/Home/AddItem/AddItem';


function App() {
  return (
    
     <div>
      <TsPartical></TsPartical>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About/>} />
        <Route path="manageItem" element={<ManageItem/>}>  </Route>
        <Route path="additem" element={<AddItem/>}>  </Route>
        <Route path="login" element={<Login />} />
      </Routes>
     <Footer></Footer>
     </div>
  );
}

export default App;
