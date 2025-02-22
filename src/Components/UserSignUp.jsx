import React,{useState} from "react";
import "../styles/UserSignUp.css"
import axios from 'axios'

const UserSignUp = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [phone,setPhone]=useState("")
    console.log(name);
    
    let handleForm=()=>{
        console.log(name,email,password,phone);
        let payload={name,email,password,phone};
        axios.post(`https://ekart-backend-tw0x.onrender.com/Users`,payload)
        .then(()=>{console.log("data saved");})
        .catch(()=>{console.log("Not Saved data");})
    }
  return (
    <div className="UserSignUp">
      <h1>User Signup</h1><br />
            <form onSubmit={handleForm} action="">
                <label htmlFor="" >Name:</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="" >Email:</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="" >Password:</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <label htmlFor="" >Phone:</label>
                <input type="tel" pattern='[0-9]{10}' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <button >submit</button>

            </form>
    </div>
  )
}

export default UserSignUp
