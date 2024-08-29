'use client'
import React, { useState } from 'react'
import ProductsTable from '../components/admin/ProductTable';
import LoginForm from '../components/admin/LoginForm';




const Admin = () => {

  // const [logged, setLogged] = useState(true)
  
  return (
    <main>
      <ProductsTable />
      {/* {
        logged ? <ProductsTable /> : <LoginForm />
      } */}
      Admin
    </main>
  )
}

export default Admin
