import React, { useState } from 'react'
import resList from './MockData.js'

function DataAsyncUi() {
    const [resData,SetResData] = useState(resList);
    const handleFilterData = () => {
        let filterdData = resData.filter((item) => item.data.avgRating  > 4 );
        SetResData(filterdData);
    };
  return (
    <div>
        <h1></h1>DataAsyncUi

<button onClick={handleFilterData}>FilterData</button>
{

    resData.map((res) => {
        return(<div>
<div>Name: {res.data.name}</div>
<div>Average Rating : {res.data.avgRating}</div>
        </div>)
    })
}
    </div>
  )
}

export default DataAsyncUi