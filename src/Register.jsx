import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

export const Register = () => {
  const [data,setData]=useState('')
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()

    if(data.password === data.rpass){
    let response=await axios.post('https://bankbackend-gamw.onrender.com/people/register',data, data.usertype='person')
    console.log(response);
    toast.success('Registered')
    }
    else{
      toast.error('Invalid')
    }

  }



  return (
    <>
    <div className='back1'>
    <ToastContainer/>
    <div className='w-full h-24 bg-red-300 text-black flex flex-col sm:flex-row justify-between items-center p-4 sm:p-0'>  
  <div className='text-xl sm:text-5xl'>
    <p>Prestige Bank</p>
  </div>
  <div className='flex gap-4 mt-6 sm:mt-0 sm:ml-[60%] text-black'>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
  </div>
</div>

<div className='w-24'>
  
</div>    
<form onSubmit={handleSubmit} class="max-w-sm mx-auto mt-9 mb-9 bg-red-300/60 pl-3 pb-3 pt-3 pr-3 rounded-lg">
<div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input name='name' onChange={handleChange} type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
    <input name='dob' onChange={handleChange} type="date" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
  <div className='mb-5'>
            <label htmlFor='gender' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Gender
            </label>
            <div className='flex items-center'>
              <input
                onChange={handleChange}
                type='radio'
                id='male'
                name='gender'
                value='male'
                
                className='mr-2'
                required
              />
              <label htmlFor='male' className='mr-4'>
                Male
              </label>
              <input
                onChange={handleChange}
                type='radio'
                id='female'
                name='gender'
                value='female'
                
                className='mr-2'
              />
              <label htmlFor='female' className='mr-4'>
                Female
              </label>
              <input
                onChange={handleChange}
                type='radio'
                id='other'
                name='gender'
                value='other'
                
                className='mr-2'
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    <input onChange={handleChange} type="text" name='address' id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input onChange={handleChange} type="text" name='phone' id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" minLength={10} maxLength={11} required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input onChange={handleChange} type="email" name='email' id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
    <input onChange={handleChange} type="password" name='password' id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input onChange={handleChange} type="password" name='rpass' id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>




    </div>
  </> 
  )
}
export default Register