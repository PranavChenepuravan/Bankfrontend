import React, { useEffect, useState } from 'react'

export const Quiz = () => {

  const [data,setDat] = useState('')

  const handleChange=(event)=>{
    setDat({...data,[event.target.name]:[event.target.value]})
  }

  let handleSubmit=async (event)=>{

    let formdata = new FormData();
    formdata.append('')
    
  }

  const  Number= 1;
  return (
    <>
    <form action="submit">
    if (Number) {
      
     <div className='flex flex-col pt-2'>
       <p>1. National bird of India ?</p>
       <div className='flex'>
        <input type="radio" name='Peacock' onChange={handleChange} />
         <label htmlFor="">(a)Peacock</label>
       </div>
       <div className='flex'>
        <input type="radio" name='Dove' onChange={handleChange} />
         <label htmlFor="">(b)Dove</label>
       </div>
       <div className='flex'>
        <input type="radio" name='Sparrow ' onChange={handleChange} />
         <label htmlFor="">(c)Sparrow</label>
       </div>
       <div className='flex'>
        <input type="radio" name='Parrot'onChange={handleChange} />
         <label htmlFor="">(d)Parrot</label>
       </div>

       <button onClick={Number} className='bg-lime-400 w-16 align-middle ml-[80%] ' > Next </button>

     </div>
     }

if (Number=='2') {
      
      <div className='flex flex-col pt-2'>
 
        <p>2. Who is the Prime Minister of India ?</p>
        <div className='flex'>
         <input type="radio" name='ManhohanSing' />
          <label htmlFor="">(a)Man Mohan Singh</label>
        </div>
        <div className='flex'>
         <input type="radio" name='MahathmaGandi' />
          <label htmlFor="">(b)Mahathma Gandi</label>
        </div>
        <div className='flex'>
         <input type="radio" name='NarendraModi ' />
          <label htmlFor="">(c)Narendra Modi</label>
        </div>
        <div className='flex'>
         <input type="radio" name='Parrot' />
          <label htmlFor="">(d)Parrot</label>
        </div>
        <div className='flex'>
         <button onClick={Number} className='bg-lime-400 w-16 ml-[80%] align-middle' > Previous </button>
         <button  className='bg-lime-400 w-16 ml-5 align-middle' > Next </button>
         </div>
        </div>
      }
      else {
      
    
      <div className='flex flex-col pt-2'>
 
        <p>3. </p>
        <p>2 + 2 / 2</p>
        <div className='flex'>
         <input type="radio" name='1' />
          <label htmlFor="">(a)1</label>
        </div>
        <div className='flex'>
         <input type="radio" name='3' />
          <label htmlFor="">(b)3</label>
        </div>
        <div className='flex'>
         <input type="radio" name='2 ' />
          <label htmlFor="">(c)2</label>
        </div>
        <div className='flex'>
         <input type="radio" name='4' />
          <label htmlFor="">(d)4</label>
        </div>
        <div className='flex'>
         <button onClick={Number} className='bg-lime-400 w-16 ml-[80%] align-middle' > Previous </button>
         <button type='submit' className='bg-red-600 w-16 ml-5 align-middle text-white' > Submit </button>
         </div>
        </div>
      }
    </form>
    </>
  )
}
export default Quiz