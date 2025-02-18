import axios from 'axios'
import React, { useEffect } from 'react'
import '../styles/UpdateProducts.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'

const UpdateProduts = () => {
  let[category,setCategory]=useState("")
  let[name,setName]=useState("")
  let[price,setPrice]=useState("")
  let[thumbnail,setThumbnail]=useState("")
  let[ratings,setRatings]=useState("")
  let[desc,setDesc]=useState("")

  let data={category,name,price,thumbnail,ratings,desc};

  let param=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:2000/products/${param.id}`)
    .then((res)=>{
      console.log(res.data);
      console.log(param.id);
      
      setCategory(res.data.category)
      setName(res.data.name)
      setPrice(res.data.price)
      setThumbnail(res.data.thumbnail)
      setRatings(res.data.ratings)
      setDesc(res.data.desc)
    })
    .catch((err)=>{
      console.log(err);
      toast.error("error fetching data")
    })
  },[])
  function update(e){
    e.preventDefault();
    axios.put(`http://localhost:2000/products/${param.id}`,data)
    .then((res)=>{
      console.log(res.data);
      toast.success("updated sucessfully")
      console.log(price);
      console.log(ratings);
      
      
    })
    .catch((err)=>{
      console.log(err);
      toast.error("invalid data")
    })
    console.log(data);
    
  }

  return (
    <div className='updateproducts'>
      <form action="" onSubmit={update}>
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
          <textarea name="" id="" rows="2"  value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
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

export default UpdateProduts
