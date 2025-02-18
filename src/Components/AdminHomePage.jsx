import React from 'react'
import AdminNavBar from './AdminNavBar'
import { Routes,Route } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminViewItems from './AdminViewItems'
import AdminAddProducts from './AdminAddProducts'
import AdminFooter from './AdminFooter'
import AdminError from './AdminError'
import UpdateProduts from './UpdateProduts'
const AdminHomePage = () => {
  return (
    <div>
      <AdminNavBar/>
        <Routes>
          <Route path='/' element={<AdminDashBoard/>}></Route>
          <Route path='/*' element={<AdminError/>}></Route>
          <Route path='/viewproducts' element={<AdminViewItems/>}></Route>
          <Route path='/addproducts' element={<AdminAddProducts/>}></Route>
          <Route path='/updateproducts/:id' element={<UpdateProduts/>}></Route>//should use ":"
        </Routes>
      <AdminFooter/>
    </div>
  )
}   

export default AdminHomePage
