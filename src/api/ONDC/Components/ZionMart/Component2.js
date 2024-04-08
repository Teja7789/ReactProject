import React, { useState } from 'react'
import { useEffect } from 'react';

function Component2() {
    const [buyerApi,setBuyerApi] = useState([]);

  useEffect(() => {
    fetch('https://buyer.ondc.zionmart.in/api/v1/buyer/banner?category=Fashion')
      .then((response) => response.json())
      .then((data) =>  setBuyerApi(data.data)
      )
  }, [])
const renderSetBuyerApi = buyerApi.map((data) => (
    <div key={data.id}>
<div>{data.category}</div>
    </div>
)
);

  return (
    <div>
{renderSetBuyerApi}
    </div>
  );
}

export default Component2;
