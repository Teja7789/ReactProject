import React, { useState } from 'react'
import BoxData from './MockBoxData'

function BoxComponent() {
    const [box,setBox] = useState(BoxData);
    const handleData = () => {
        const  newBox = box.map((item) => item.on === !item.on
        //  true ? {...item , on: false} : {...item , on:true}
         )
        setBox(newBox);
    }
    const renderBox =box.map((item) => 
        (
            <div style={{display:"inline",width:"60px"}}>
            <div key={item.id} onClick={(id) => handleData(id)} style={{ background: item.on ? "green" : "red", border:"10px solid black", width:"50px", height:"100px"}}>
            <p>{item.id}</p>
                </div>   
                </div>
        )
    ); 
  return (
    <>{renderBox}</>

  )
}

export default BoxComponent