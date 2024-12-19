import Landing from "./Components/Landing";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import UserSignUp from "./Components/UserSignUp"
import AdminError from "./Components/AdminError";
import UserHomePage from "./Components/UserHomePage";
import { ToastContainer, toast } from 'react-toastify';//from npm toastify
import 'react-toastify/dist/ReactToastify.css';//from tostify
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram ,faFacebookF} from '@fortawesome/free-brands-svg-icons'

library.add(fas,faInstagram,faFacebookF)
const App=()=>{
  
  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AdminError/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/userlogin" element={<UserLogin/>}/>
          <Route path="/adminsignup" element={<AdminSignUp/>}/>
          <Route path="/adminhomepage/*" element={<AdminHomePage/>}></Route>
          <Route path="/userhomepage/*" element={<UserHomePage/>}></Route>
          <Route path="/usersignup" element={<UserSignUp/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
