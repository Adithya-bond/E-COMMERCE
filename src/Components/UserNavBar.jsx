import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/UserNavBar.css"
const UserNavBar = () => {
  return (
    <div className='unavbar'>
      <Link to="/userhomepage/phones">Phones</Link>
      <Link to="/userhomepage/clothes">Clothes</Link>
      <Link to="/userhomepage/phoneaccessories">Phone Accessories</Link>
      <Link to="/userhomepage/groceries">Groceries</Link>
    </div>
  )
}

export default UserNavBar
