import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { addContact } from "../../src/action/contactAction";
import { useHistory } from "react-router-dom";
import { addContact } from "../contactAction";
// import { addContact } from "../contactAction";

export default function Create() {
  let history = useHistory();
  const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();
const {register, handleSubmit} = useForm({
    defaultValues:{
        username:"",
    }
});  
const onSubmit = (data) => {
    dispatch(addContact(data));
    history.push("/");
    console.log(data);
  };
  return (
    <form  onSubmit={handleSubmit(onSubmit)} >
     <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username")}
          />
          {/* <p className="error">{errors.username?.message}</p> */}
        </div>
       <button type="submit">Submit</button> 
    </form>
  );
}