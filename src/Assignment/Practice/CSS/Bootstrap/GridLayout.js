import React from 'react'

function GridLayout() {
  return (
    <div className='container'>
        <div className='row border  border-primary  m-1 h-25'>
         <div className='col-sm-6 border  border-danger'>
            1
         </div>
         <div className='col-sm-6 border  border-danger'>
            2
         </div>
        </div>
        <div className='row border border-primary m-1'>
         <div className='col-sm-4 border  border-danger'>
            1
         </div>
         <div className='col-sm-4 border  border-danger'>
            2
         </div>
         <div className='col-sm-4 border  border-danger'>
            3
         </div>
        </div> 
        <div className='row border border-primary m-1'>
         <div className='col-sm-3 border  border-danger'>
            1
         </div>
         <div className='col-sm-3 border  border-danger'>
            2
         </div>
         <div className='col-sm-3 border  border-danger'>
            3
         </div>
         <div className='col-sm-3 border  border-danger'>
            4
         </div>
        </div>
    </div>
  )
}

export default GridLayout