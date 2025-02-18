import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
const UserViewItems = () => {
 
    let [products,setProducts]=useState([]);
    let param=useParams();
 
    useEffect(()=>{
        function fetchdata(){
          axios.get(`http://localhost:2000/products`)
        .then((res)=>{
          console.log(res);
          console.log(res.data);
          setProducts(res.data)
        })
        .catch((err)=>{
          console.log(err);
          
        })
        }
        fetchdata()
      },[])
    
      let navigate=useNavigate();
      function addtocart(id){
       navigate(`/userhomepage/${id}`)
      }
      console.log(param);
      
      
      return (
        <div className='uhome'>
          {
            products.map((product)=>{
              return(
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
                    {/* <button onClick={()=>{addtocart(product.id)}}>Add to cart</button> */}
                  </div>
                </div>
                
              </div>
              )
            })
          }
        </div>
      )
}

export default UserViewItems
