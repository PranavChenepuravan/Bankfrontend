import React, { useState,useEffect } from 'react';
import axios from 'axios';

export const PeopleTransaction = () => {
  const [showDepositConfirmation, setShowDepositConfirmation] = useState(false);
  const [showWithdrawConfirmation, setShowWithdrawConfirmation] = useState(false);

  const handleDepositClick = () => {
    setShowDepositConfirmation(true);
    setShowWithdrawConfirmation(false);
  };

  const handleWithdrawClick = () => {
    setShowDepositConfirmation(false);
    setShowWithdrawConfirmation(true);
  };




  let id = localStorage.getItem('id')
  console.log(id)
  const [refresh,setrefresh]=useState('')
  const [data,setData]=useState('')

  useEffect(()=>{
      let fetchData= async() =>{
          let response =await axios.get(`http://localhost:4000/bank/userdetails/${id}`)
          console.log(response.data,'Hai')
          setData(response.data)
      }
      fetchData()
  },[refresh])


  const [userData,setUserdata]=useState('')
  let handleChange=(event)=>{
    setUserdata({...userData,[event.target.name]:event.target.value,userid:id})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try{
      let response=axios.post('http://localhost:4000/people/transction',userData,userData.balance=parseFloat(data.balance)+parseFloat(userData.amount),userData.action='Deposit')
      console.log(response);
      let response1 = axios.put(`http://localhost:4000/bank/userdetails2/${id}`,userData,userData.balance=parseFloat(data.balance)+parseFloat(userData.amount))
      console.log(response1)
      window.location.reload()
    }
    catch(e){

    }
  }


  const handleAnotherSubmit = (event) => {
    event.preventDefault()
    try{
      console.log(data.balance,'balance')
      console.log(userData.amount,'amount')
      if(parseFloat(data?.balance) >= parseFloat(userData?.amount)){
        let response=axios.post('http://localhost:4000/people/transction',userData,userData.balance=parseFloat(data.balance)-parseFloat(userData.amount),userData.action='Withdraw')
        console.log(response);
        let response1 = axios.put(`http://localhost:4000/bank/userdetails2/${id}`,userData,userData.balance=parseFloat(data.balance)-parseFloat(userData.amount))
        console.log(response1)
        window.location.reload()
      }
      else{
        console.log('Balance is low')
      }

    }
    catch(e){

    }
  }



  return (
    <>
      <form className="space-y-6" action="#">
        <div className="pl-[35%]">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 align-middle">
            <h5 className="pl-20 text-xl font-medium text-gray-900 dark:text-white">TRANSACTION</h5>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Balance</label>
              <input type="number" name="balance" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"value={data?.balance} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <input type="number" name="amount" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange} />
            </div>
            <div className="ml-14 pt-4">
              <button type="button" onClick={handleDepositClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Deposit</button>
              <button type="button" onClick={handleWithdrawClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Withdraw</button>
            </div>
          </div>
        </div>

        {showDepositConfirmation && (
          <div className="pl-[35%] pt-2">
            <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 align-middle">
              <p>Confirm Deposit</p>
              <div className="pt-2">
                <button onClick={handleSubmit} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ok</button>
              </div>
            </div>
          </div>
        )}

        {showWithdrawConfirmation && (
          <div className="pl-[35%] pt-2">
            <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 align-middle">
              <p>Confirm Withdrawal</p>
              <div className="pt-2">
                <button onClick={handleAnotherSubmit} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ok</button>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default PeopleTransaction;
