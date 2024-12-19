import React from "react";
import "../styles/AdminNavBar.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const AdminNavBar = () => {
  return (
    <div className="AdminNavBar">
      <div className="logo">
        <h1>
          Ekart
        </h1>
      </div>
      <div className="midcontent">
        <Link to="/adminhomepage/addproducts">Add Items</Link>
        <Link to="/adminhomepage/viewproducts">Shopping List</Link>
      </div>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
            <AccountCircleIcon/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">User details</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default AdminNavBar;
