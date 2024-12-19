import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../styles/AdminAddProducts.css'
const AdminAddProducts = () => {
  let[category,setCategory]=useState("");
  let[name,setName]=useState("");
  let[price,setPrice]=useState("");
  let[thumbnail,setThumbnail]=useState("");
  let[ratings,setRatings]=useState("");
  let[desc,setDesc]=useState("");

  let data ={category,name,price,thumbnail,ratings,desc}
  function addProducts(e){
    e.preventDefault()
    axios.post('http://localhost:2000/products',data)
    .then((res)=>{
      console.log(res);
      toast.success('data is added succcesfully');
    }) 
    .catch((err)=>{ 
      console.log(err); 
      toast.error('Invalid data') 
    }) 
  }
  return (
    <div className='addproducts'> 
      <form action="" onSubmit={addProducts}> 
        <fieldset> 
          <label htmlFor=""> 
            Category:
          </label> 
          <select required value={category} onChange={(e)=>{setCategory(e.target.value)}}> 
            <option>Dress Materials</option> 
            <option>Mobile</option> 
            <option>Mobile Accessories</option> 
            <option>Electronics</option> 
            <option>Groceries</option> 
          </select> 
          <label htmlFor="">Product Name: </label> 
          <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} /> 
          <label htmlFor="">Product Price:</label> 
          <input type="text" required value={price} onChange={(e)=>{setPrice(e.target.value)}} /> 
          <label htmlFor="">Description:</label> 
          <textarea name="" id="" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea> 
          <label htmlFor="">Thumbnail:</label> 
          <input type="text" required value={thumbnail} onChange={(e)=>{setThumbnail(e.target.value)}} /> 
          <label htmlFor="">Ratings</label> 
          <input type="number" required value={ratings} onChange={(e)=>{setRatings(e.target.value)}} /> 
          <button>Submit</button> 
        </fieldset> 
      </form>
    </div>
  )
}

export default AdminAddProducts
