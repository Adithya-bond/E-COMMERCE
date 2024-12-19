import { Link } from "react-router-dom";
import "../styles/Landing.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Landing = () => {
  return (
    <div className="Landing">
      <div className="box1">
        <Link to="/adminlogin">
          <FontAwesomeIcon icon="fa-solid fa-user-secret" size="10x"/>
          <h1>ADMIN</h1>
        </Link>
      </div>
      <div className="box2">
        <Link to="/userlogin">
          <FontAwesomeIcon icon="fa-solid fa-user" size="10x"/>
          <h1>USER</h1>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
