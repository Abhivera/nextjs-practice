'use client';
import React from 'react'

const AddCard = () => {
  return (<>
  <button onClick={()=>console.log("It is clicking")} className="btn btn-primary">Add to Card</button>
  <div className='p-6 my-5 bg-sky-400 text-yellow-200 text-xl hover:bg-indigo-600'> Hello learning next js</div>
  </>
    
  )
}

export default AddCard