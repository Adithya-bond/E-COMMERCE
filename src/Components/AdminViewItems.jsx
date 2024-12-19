import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminViewItems.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AdminViewItems = () => {
  let [products, setProducts] = useState([]);
  let [force,setForce]=useState(0)

  useEffect(() => {
    function fetchdata() {
      axios.get("http://localhost:2000/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          console.log(force);
        })
        .catch((err) => {
          console.log(err);
        });
    }   
    fetchdata();
  }, [force]);

  function deleteproducts(id,name){
    axios.delete(`http://localhost:2000/products/${id}`)
    .then(()=>{
      toast.success(`${name} deleted succesfully`)
      setForce(force+1)
    })
    .catch(()=>{
      toast.error('Data not present')
    })
  }

let navigate=useNavigate();
function editpage(id){
  navigate(`/adminhomepage/updateproducts/${id}`)
}

  return (
    <div className="viewitems">
      {products.map((product) => {
        return (
          <div className="cardscontainer">
            <div className="card">
              <div className="thumbnail">
                <img src={product.thumbnail} alt="image of a product" />
              </div>
              <div className="description">
                <h3>{product.name}</h3>
                <span id="cost">
                  <b>MRP:</b>{" "}
                  <big>
                    <strike>&#8377;{product.price}</strike>
                  </big>
                </span>
                <h5>
                  Offer Price: 12% off &#8377;
                  {Math.round(product.price * 0.88)}
                </h5>
                <p><b>Description:</b> {product.desc}</p>
                <span><b>Ratings:</b> {product.ratings}*</span><br />
                <button id="update" onClick={()=>{editpage(product.id)}}>Update</button>
                <button id="delete" onClick={()=>{deleteproducts(product.id,product.name)}}>Delete</button>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default AdminViewItems;
