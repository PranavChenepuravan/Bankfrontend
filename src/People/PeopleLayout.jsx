import React from 'react'
import Topnavig from '../Component/Navbar'
import { Outlet } from 'react-router-dom'

export const PeopleLayout = () => {
  return (
    <div className='flex flex-col'>
        <Topnavig/>
        <div className='back3 w-screen p-4'>
          <Outlet/>
        </div>
    </div>
  ) 
}
export default PeopleLayout
