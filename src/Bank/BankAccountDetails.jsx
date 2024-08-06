import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const BankAccountDetails = () => {

    let {id} = useParams()
    const [data,setData]=useState('')
    const [refresh,setrefresh]=useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        let fetchdata = async() =>{
            let response =await axios.get(`https://bankbackend-gamw.onrender.com/bank/userdetails/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[refresh])

    const [userData,setUserdata]=useState('')
    let handleChange=(event)=>{
      setUserdata({...userData,[event.target.name]:event.target.value,userid:id})
        console.log(data)
    }

    let handleSubmit=async (event)=>{
      event.preventDefault()
      let response = axios.put(`https://bankbackend-gamw.onrender.com/bank/userdetails/${id}`,userData)
      setrefresh(!refresh)
      console.log(response)
      navigate('/bank/accounts')

    }
  return (
    <>

      <div className="flex items-center justify-center min-h-scree dark:bg-gray-900 p-4">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <label htmlFor="password4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
              <input type="text" name="accno" id="password4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={data?.accno} required onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Balance</label>
              <input type="number" name="balance" id="password4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={data?.balance} required onChange={handleChange} />
            </div>
            <div className='pt-4'>
            <button onClick={handleSubmit} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Save</button>
            </div>

        </div>
      </div>

    </>
  );
}

export default BankAccountDetails;
