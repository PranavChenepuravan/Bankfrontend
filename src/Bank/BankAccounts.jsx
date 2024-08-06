import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const BankAccounts = () => {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState('')

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get('https://bankbackend-gamw.onrender.com/bank/user')
            console.log(response.data)
            setData(response.data)
        }
        fetchData()
    }, [refresh])

    return (
        <div className="relative overflow-x-auto">
            <table className="min-w-screen text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">Name</th>
                        <th scope="col" className="px-4 py-2">Date of Birth</th>
                        <th scope="col" className="px-4 py-2">Gender</th>
                        <th scope="col" className="px-4 py-2">Phone</th>
                        <th scope="col" className="px-4 py-2">Email</th>
                        <th scope="col" className="px-4 py-2">Address</th>
                        <th scope="col" className="px-4 py-2">Account No</th>
                        <th scope="col" className="px-4 py-2">Balance</th>
                        <th scope="col" className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-4 py-2">{item?.name}</td>
                            <td className="px-4 py-2">{item?.dob}</td>
                            <td className="px-4 py-2">{item?.gender}</td>
                            <td className="px-4 py-2">{item?.phone}</td>
                            <td className="px-4 py-2">{item?.email}</td>
                            <td className="px-4 py-2">{item?.address}</td>
                            <td className="px-4 py-2">{item?.accno}</td>
                            <td className="px-4 py-2">{item?.balance}</td>
                            <td className="px-4 py-2">
                                <Link to={`/bank/accountdetails/${item._id}`}>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button>
                                </Link>
                                <Link to={`/bank/accountshistory/${item._id}`}>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">History</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BankAccounts
