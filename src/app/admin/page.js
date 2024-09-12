'use client'
import React, { useState } from 'react'
import ProductsTable from '../components/admin/ProductTable';
import LoginForm from '../components/auth/LoginForm';



const Admin = () => {

  // const [logged, setLogged] = useState(true)
  
  return (
    <main>
      <ProductsTable />
      {/* {
        logged ? <ProductsTable /> : <LoginForm />
      } */}
    </main>
  )
}

export default Admin
