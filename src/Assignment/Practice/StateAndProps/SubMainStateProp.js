import React, { useState } from 'react'

function SubMainStateProp({count}) {
    const [addCount,setAddCount] = useState(
        {id:1 , counter : 1},
    );
const handleCount = () => {
    setAddCount({
        ...addCount,
        counter:addCount.counter + count.countInc
    })
}
console.log(addCount,"add")
  return (
    <div>SubMainStateProp <button onClick={handleCount}>Add</button></div>
  )
}

export default SubMainStateProp