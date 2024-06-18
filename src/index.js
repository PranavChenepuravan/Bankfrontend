import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Quiz from './Quiz';
import Register from './Register';
import Login from './Login';
import 'react-toastify/dist/ReactToastify.css';
import PeopleHome from './People/PeopleHome';
import PeopleLayout from './People/PeopleLayout';
import PeopleTransaction from './People/PeopleTransaction';
import BankLayout from './Bank/BankLayout';
import BankAccounts from './Bank/BankAccounts';
import BankAccountDetails from './Bank/BankAccountDetails';
import PeopleTransactionHistory from './People/PeopleTransactionHistory';
import BankAccountsHistory from './Bank/BankAccountsHistory';
import PeopleProfile from './People/PeopleProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}>
    
    </Route>
    <Route path='/register' element={<Register/>}>

    </Route>
    <Route path='/login' element={<Login/>}>
      
    </Route>
    <Route path='/people' element={<PeopleLayout/>}>
      <Route path='peopletransac' element={<PeopleTransaction/>}/>
      <Route path='peopletransachistory' element={<PeopleTransactionHistory/>}/>
      <Route path='peopleprofile' element={<PeopleProfile/>}/>
    </Route>
    <Route path='/bank' element={<BankLayout/>}>
      <Route path='accounts' element={<BankAccounts/>}/>
      <Route path='accountdetails/:id' element={<BankAccountDetails/>}/>
      <Route path='accountshistory/:id' element={<BankAccountsHistory/>}/>
    </Route>


    







       {/* <Route path='/' element={<Quiz/>}>

       </Route> */}

   </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
