import React from 'react'
import { Link } from 'react-router-dom'


export const Landing = () => {
  return (
    <>
    <div className='back1'>
    <div className='w-full h-24 bg-red-300 text-black flex flex-col sm:flex-row justify-between items-center p-4 sm:p-0'>
  <div className='text-xl sm:text-5xl'>
    <p>Prestige Bank</p>
  </div>
  <div className='flex gap-4 mt-4 sm:mt-0 sm:ml-[60%] text-black'>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
  </div>
</div>

    </div>
    </>
  )
}
export default Landing
