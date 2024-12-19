import React, { useEffect, useState } from "react";
import "../styles/AdminLogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AdminLogin = () => {
  let [username, setUsername] = useState("");
  console.log(username);
  let [password, setPassword] = useState("");
  console.log(password);
  let [admin, setAdmin] = useState([]);
  useEffect(() => {
    async function fetchAdmin() {
      let data = await fetch("http://localhost:2000/Admin");
      let res = await data.json();
      setAdmin(res);
    }
    fetchAdmin();
  }, []);
  let navigate = useNavigate();
  function login(e) {
    // if(username=="jspiders" && password=="1234"){
    //     alert("Admin login successfull")
    // }
    // else{
    //     alert("incorrect username or password")
    // }//bad way
    let val = admin.filter((x) => {
      return x.name == username && x.password == password;
    });
    console.log(val);
    
    if (val.length > 0) {
      alert("sucsessfull");
      toast.success("login successfull")
      navigate("/adminhomepage");
    } else {
      e.preventDefault();  
      alert("invalid credentials");
      toast.error("invalid credentials")
    }
    
  }
  return (
    <div className="AdminLogin">
      <h1 >Admin Login</h1>
      <form action="">
        <label htmlFor="">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <label htmlFor="">Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password" required
        />
        <button onClick={login}>Login</button>
        <span>
          Click here to <Link to="/adminsignup"> Sign up </Link>
        </span>
      </form>
    </div>
  );
};

export default AdminLogin;
