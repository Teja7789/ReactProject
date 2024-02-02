import React from 'react'
import SubMainStateProp from './SubMainStateProp'

function MainStateProp() {
    const count ={ id: 1, countInc: 1 }
  return (
    <div>MainStateProp

        <SubMainStateProp  count={count}/>
    </div>
  )
}

export default MainStateProp