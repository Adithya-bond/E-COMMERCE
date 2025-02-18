import React, { useEffect, useState } from "react";
import "../styles/UserLogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  let [username, setUsername] = useState("");
  console.log(username);
  let [password, setPassword] = useState("");
  console.log(password);
  let [admin, setAdmin] = useState([]);
  useEffect(() => {
    async function fetchAdmin() {
      let data = await fetch("http://localhost:2000/Users");
      let res = await data.json();
      setAdmin(res);
    }
    fetchAdmin();
  }, []);
  let navigate = useNavigate();
  function login() {
    // if(username=="jspiders" && password=="1234"){
    //     alert("Admin login successfull")
    // }
    // else{
    //     alert("incorrect username or password")
    // }//bad way
    let val = admin.filter((x) => {
      return x.email == username, x.password == password;
    });
    if (val.length > 0) {
      alert("sucsessfull");
      navigate("/userhomepage");
    } else {
      alert("invalid credentials");
    }
  }

  return (
    <div className="UserLogin">
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
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          required
        />
        <button onClick={login}>Login</button>
        <span>
          Click here to <Link to="/usersignup"> Sign up </Link>
        </span>
      </form>
    </div>
  );
};

export default UserLogin;
