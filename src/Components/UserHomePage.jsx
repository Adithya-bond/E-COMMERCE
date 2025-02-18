import React from 'react'

import {Route, Routes, useNavigate, useParams } from 'react-router-dom'

import UserNavBar from './UserNavBar'
import UserViewItems from './UserViewItems'
import UserPhones from './UserPhones'
import UserPAccessories from './UserPAccessories'
import UserGroceries from './UserGroceries'
import UserClothes from './UserClothes'

const UserHomePage = () => {

  return (
    <div className='uhomepage'>
      <UserNavBar/>
      <Routes>
        <Route path='/' element={<UserViewItems/>}></Route>
        <Route path='/phones' element={<UserPhones/>}></Route>
        <Route path='/phoneaccessories' element={<UserPAccessories/>}></Route>
        <Route path='/groceries' element={<UserGroceries/>}></Route>
        <Route path='/clothes' element={<UserClothes/>}></Route>
      </Routes>
    </div>
    
  )
}

export default UserHomePage

