import React, { useState } from 'react'
import { useEffect } from 'react';

function GComp4() {
    const [buyerApi,setBuyerApi] = useState([]);

  useEffect(() => {
    fetch('https://buyer.ondc.zionmart.in/api/v1/buyer/products/details/1a07e33fe11d11eea82ec35e3e14d068-sellerappapi.ninjacart.in')
      .then((response) => response.json())
      .then((data) =>  console.log(data.data)
      )
  }, [])
  //AddTocart postCall - https://buyer.ondc.zionmart.in/api/v1/buyer/frontend_cart/create
// const renderSetBuyerApi = buyerApi.map((data) => (
//     <div key={data.id}>
// <div>{data.category}</div>
//     </div>
// )
// );

  return (
    <div>
{/* {renderSetBuyerApi} */}
    </div>
  );
}

export default GComp4;