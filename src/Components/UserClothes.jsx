import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserClothes = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://ekart-backend-tw0x.onrender.com/products`)
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data)
        })
       
    },[])
    let filtered= products.filter((e)=>{
        return(e.category=='Dress Materials')
    })
    console.log(filtered);
  
    
    
    
    
  return (
    <div>
      {
            filtered.map((product)=>{
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
                    <button >Add to cart</button>
                  </div>
                </div>
                
              </div>
              )
            })
          }
    </div>
  )
}

export default UserClothes
