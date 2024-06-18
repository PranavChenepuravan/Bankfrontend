import React from 'react'
import Topnavig from '../Component/Navbar2'
import { Outlet } from 'react-router-dom'

export const BankLayout = () => {
  return (
    <div className='flex flex-col'>
        <Topnavig/>
        <div className='back3 w-screen p-4'>
          <Outlet/>
        </div>
    </div>
  )
}
export default BankLayout
