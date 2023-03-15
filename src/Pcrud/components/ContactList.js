import React from 'react'

export default function ContactList(props) {
    console.log(props);
    const renderData = props.DATA?.map((data) => {
        return (
            <>
        <div>{data.email}</div>
        <div>{data.password}</div>
        </>
    )

    }
    )
  return (
    <div> 
      {renderData}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  )
}
