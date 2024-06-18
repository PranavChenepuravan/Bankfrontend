import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const Login = () => {
  const navigate = useNavigate()
  const[data,setData]=useState('')
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    try{
      const requiredField = ['email','password']

      for(const field of requiredField){
        if(!data[field]){
          return
        }
      }

      let response=await axios.post('http://localhost:4000/login',data)
      console.log(response);
      if(response.data){
        localStorage.setItem('id',response.data.user._id)
        localStorage.setItem('email',response.data.user.email)
        localStorage.setItem('token',response.data.token)
        if(response.data.user.usertype=='person' && response.data.user.accno!='Nothing' ){
          navigate('/people')
        }
        else if(response.data.user.usertype=='bank'){
          navigate('/bank')
        }
        else{
          toast.error('Not a user')
        }
      }
    }
    catch(e){
      toast.error('User id or password is invalid')
    }
  }
  return (
    <>
    <ToastContainer/>
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

        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md p-8 space-y-6 bg-red-300/50 rounded-lg shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    User id
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    {/* <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div> */}
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className='pb-7 pt-5'>
                <button
  type="submit"
  className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
>
  Log in
</button>

                </div>
              </form>
{/* 
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Start a 14 day free trial
                </a>
              </p> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
