import React, { useState } from "react";

const AddContact = (props
  // {addContactHandler}
  ) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    console.log(name,email,"data")
    e.preventDefault();
    // if (name === "" || email === "") {
    //   alert("ALl the fields are mandatory!");
    //   return;
    // }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
