import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const PeopleProfile = () => {

    let id = localStorage.getItem('id')
    const [data, setData] = useState('')
    const [refresh, setRefresh] = useState('')

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(`https://bankbackend-gamw.onrender.com/bank/userdetails/${id}`)
                console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [refresh])

    return (
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white/90 shadow-xl rounded-lg text-gray-900">
            <div className='flex flex-col pl-[15%] text-xl pt-8 pb-6'>
                <div className='flex'> 
                    <div>Name : </div>
                    <h2>{data?.name}</h2>
                </div>
                <div className='flex'> 
                    <div>Account No : </div>
                    <h2>{data?.accno}</h2>
                </div>
                <div className='flex'> 
                    <div>Phone : </div>
                    <h2>{data?.phone}</h2>
                </div>
                <div className='flex'> 
                    <div>Email : </div>
                    <h2>{data?.email}</h2>
                </div>
                <div className='flex flex-col'> 
                    <div className='underline'>Address  </div>
                    <h2>{data?.address}</h2>
                </div>
            </div>
        </div>
    )
}

export default PeopleProfile
