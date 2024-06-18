import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const BankAccountsHistory = () => {

    let {id} = useParams()
    const [refresh,setrefresh]=useState('')
    const [data,setData]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let response = await axios.get(`http://localhost:4000/people/transdetails/${id}`)
            console.log(response.data,'hsd')
            setData(response.data)
        }
        fetchData()
    },[refresh])

  return (
    <>
      

    <div class="relative overflow-x-auto">
        <table class="w-[70%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                   <th scope="col" class="px-6 py-3">
                        Balance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date and Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.balance}
                    </td>
                    <td class="px-6 py-4">
                        {item?.amount}
                    </td>
                    <td class="px-6 py-4">
                       {(new Date(item.dateandtime)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
                    </td>
                    <td class="px-6 py-4">
                        {item?.action}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
        </>
  )
}
export default BankAccountsHistory