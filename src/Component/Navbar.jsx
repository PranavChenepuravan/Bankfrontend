import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Navbar = () => {

  const [refresh, setRefresh] = useState(true)
  let id = localStorage.getItem('id')
  const [users, setUsers] = useState('')
  let navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token, 'token received')
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://bankbackend-gamw.onrender.com/view/${id}`, {
          headers: {
            Authorization: token
          }
        })
        console.log(response)
        setUsers(response.data)
      } catch (e) {
        toast(e.response.data)
        console.log(e.response.data)
        navigate('/login')
      }
    }
    fetchData()
  }, [refresh])

  let logout = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <div className='w-full h-24 bg-violet-400 text-black flex justify-between items-center p-4'>
        <div className='text-xl sm:text-5xl'>
          <p>Prestige Bank</p>
        </div>
        <div className='flex gap-4 pt-14'>
          <Link to='/people'>Home</Link>
          <Link to='/people/peopleprofile'>Profile</Link>
          <Link to='/people/peopletransac'>Transaction</Link>
          <Link to='/people/peopletransachistory'>History</Link>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
