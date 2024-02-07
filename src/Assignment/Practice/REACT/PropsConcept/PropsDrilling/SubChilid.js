import React from "react";

const SubChilid = (props) => {
  const { id, name , phoneNumber} = props.contact;
  return (
    <div  key={id}>
     
        <p>{name}</p>
        <p>{phoneNumber}</p>
      
    </div>
  );
};

export default SubChilid;